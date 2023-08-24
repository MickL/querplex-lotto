export interface CreateTicketDto {
    amount: number;
}

export interface TicketSummaryDto {
    id: string;
    blocks: number;
}

export interface CreateTicketResponseDto extends TicketSummaryDto {
}

export interface GetTicketsResponseDto {
    items: TicketSummaryDto[];
}

export interface GetTicketResponseDto {
    id: string;
    blocks: number[][];
}
