import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Exchange, ExchangeDocument } from './schemas/exchange.schema';
import { Model } from 'mongoose';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { HttpService } from '@nestjs/axios';
import { catchError, map, Observable, tap, of, firstValueFrom } from 'rxjs';

@Injectable()
export class ExchangeService {
  private readonly CACHE_KEY = 'EurToPlnRateKey';
  private readonly CACHE_TTL = 60000;
  constructor(
    @InjectModel(Exchange.name)
    private exchangeModel: Model<ExchangeDocument>,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
    private readonly httpService: HttpService,
  ) {}
  /**
   * Return a cached exchange rate if available,
   * otherwise fetches and caches it
   * @returns {Promise<number>}
   */
  async getExchangeRate(): Promise<number> {
    const cachedRate = await this.cacheManager.get(this.CACHE_KEY);

    if (cachedRate) {
      return cachedRate as number;
    }
    return firstValueFrom(this.fetchExchangeRate());
  }

  /**
   * Converts an amount from EUR to PLN using the current exchange rate.
   * @param {number} amountInEur - The amount to convert in EUR
   * @returns {Promise<number>} - The converted amount in PLN
   */
  async exchangeConversion(amountInEur: number): Promise<number> {
    const exchangeRate = await this.getExchangeRate();
    const plnAmount = amountInEur * exchangeRate;

    const exchangeData = new this.exchangeModel({
      eur: amountInEur,
      pln: plnAmount,
      rate: exchangeRate,
      timestamp: new Date(),
    });
    await exchangeData.save();
    return plnAmount;
  }

  /**
   * Fetches the exchange rate from the API and caches it
   * @returns {Observable<number>}
   */
  fetchExchangeRate(): Observable<number> {
    return this.httpService.get('').pipe(
      map((response) => {
        const data = response.data as { exchange_rate: number };
        const exchangeRate = data.exchange_rate;

        this.cacheManager
          .set(this.CACHE_KEY, exchangeRate, this.CACHE_TTL)
          .then(() => console.log('Rate changed to: ', exchangeRate))
          .catch((err) => console.error('Error setting cache:', err));

        return exchangeRate;
      }),
      catchError((err) => {
        console.error('Error fetching exchange rate:', err);
        return of(4.4);
      }),
      tap((rate) => console.log('Rate: ', rate)),
    );
  }
}
