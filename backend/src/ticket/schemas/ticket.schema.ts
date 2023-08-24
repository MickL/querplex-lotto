import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TicketDocument = HydratedDocument<Ticket>;

@Schema()
export class Ticket {
  // TODO: Save each block as a separate document within its own collection?
  @Prop([[Number]])
  blocks: number[][];
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
