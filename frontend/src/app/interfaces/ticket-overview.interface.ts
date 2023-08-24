export interface TicketSummary {
  id: string;
  blocks: number;
}

export interface TicketOverview {
  items: TicketSummary[];
}
