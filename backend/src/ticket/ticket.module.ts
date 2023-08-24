import { Module } from '@nestjs/common';
import { BlockService } from './services/block.service';
import { TicketsController } from './tickets.controller';
import { TicketService } from './services/ticket.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticket, TicketSchema } from './schemas/ticket.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }]),
  ],
  controllers: [TicketsController],
  providers: [BlockService, TicketService],
})
export class TicketModule {}
