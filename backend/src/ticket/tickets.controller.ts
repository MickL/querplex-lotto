import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import {
  BE_ROUTES,
  CreateTicketResponseDto,
  GetTicketResponseDto,
  GetTicketsResponseDto,
} from '@shared';
import { BlockService } from './services/block.service';
import { TicketService } from './services/ticket.service';
import { CreateTicketValidatedDto } from './dtos/create-ticket.dto';

// TODO: Valdiation
@Controller(BE_ROUTES.tickets)
export class TicketsController {
  constructor(
    private blockService: BlockService,
    private ticketService: TicketService,
  ) {}

  @Get()
  async getTickets(): Promise<GetTicketsResponseDto> {
    const ticketDocuments = await this.ticketService.findAll();

    return {
      items: ticketDocuments.map((document) => {
        return {
          id: document.id,
          blocks: document.blocks.length,
        };
      }),
    };
  }

  @Post()
  async createTickets(
    @Body() dto: CreateTicketValidatedDto,
  ): Promise<CreateTicketResponseDto> {
    const blocks = this.blockService.getBlocks(dto.amount);
    const document = await this.ticketService.create(blocks);

    return {
      id: document.id,
      blocks: blocks.length,
    };
  }

  @Get(':id')
  async getTicket(@Param('id') id: string): Promise<GetTicketResponseDto> {
    const document = await this.ticketService.findOne(id);

    if (!document) {
      throw new NotFoundException(`Ticket '${id}' not found`);
    }

    return {
      id: document.id,
      blocks: document.blocks,
    };
  }
}
