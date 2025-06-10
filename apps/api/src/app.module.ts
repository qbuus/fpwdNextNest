import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExchangeModule } from './exchange/exchange.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.getOrThrow<string>('MONGODB_URI');
        if (!uri) {
          console.error('Missing MONGODB_URI environment variable');
          return {
            uri: 'mongodb://localhost/invalid',
            connectionFactory: () => null,
          };
        }

        console.log('You are now connected to MongoDB');
        return {
          uri,
        };
      },
    }),

    ExchangeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
