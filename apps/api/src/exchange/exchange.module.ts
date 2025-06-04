import { Module } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { ExchangeController } from './exchange.controller';
import { Exchange, ExchangeSchema } from './schemas/exchange.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Exchange.name,
        schema: ExchangeSchema,
      },
    ]),
    CacheModule.register({
      ttl: 60,
      max: 100,
    }),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        timeout: 5000,
        headers: {
          'x-api-key': configService.get<string>('API_KEY'),
        },
        baseURL: configService.get<string>('API_URL'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule,
  ],
  providers: [ExchangeService],
  controllers: [ExchangeController],
})
export class ExchangeModule {}
