import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ComputerDocument = HydratedDocument<Computer>;

@Schema()
export class Computer {
  @Prop()
  name: string;

  @Prop()
  color: string;

  @Prop()
  dataFabricacao: Number;
}

export const ComputerSchema = SchemaFactory.createForClass(Computer);