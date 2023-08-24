import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket, TicketDocument } from '../schemas/ticket.schema';
import { Model } from 'mongoose';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket.name) private ticketModel: Model<Ticket>) {}

  async create(blocks: number[][]): Promise<TicketDocument> {
    return this.ticketModel.create({
      blocks,
    });
  }

  async findAll(): Promise<TicketDocument[]> {
    return this.ticketModel.find();
  }

  async findOne(id: string): Promise<TicketDocument | undefined> {
    return this.ticketModel.findById(id);
  }
}
