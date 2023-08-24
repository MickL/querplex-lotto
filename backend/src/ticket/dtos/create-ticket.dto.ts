import { CreateTicketDto } from '@shared';
import { IsNumber, Min } from 'class-validator';

export class CreateTicketValidatedDto implements CreateTicketDto {
  @IsNumber()
  @Min(1)
  amount: number;
}
