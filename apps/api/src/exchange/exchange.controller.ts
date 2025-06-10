import { Controller, Post, Body, Get } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { CreateExchangeDto } from './dto/create-exchange.dto';

@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}
  @Get('check')
  fetchExchangeRate() {
    return this.exchangeService.getExchangeRate();
  }

  @Post()
  async exchangeConversion(@Body() dto: CreateExchangeDto): Promise<number> {
    return this.exchangeService.exchangeConversion(dto.amountInEur);
  }
}
