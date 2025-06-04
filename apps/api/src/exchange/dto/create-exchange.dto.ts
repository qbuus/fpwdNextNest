import { IsNumber } from 'class-validator';

export class CreateExchangeDto {
  @IsNumber()
  amountInEur: number;
}
