import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExchangeDocument = HydratedDocument<Exchange>;

@Schema()
export class Exchange {
  @Prop({ required: true }) eur: number;
  @Prop({ required: true }) pln: number;
  @Prop({ required: true }) rate: number;
  @Prop({ required: true }) timestamp: Date;
}

export const ExchangeSchema = SchemaFactory.createForClass(Exchange);
