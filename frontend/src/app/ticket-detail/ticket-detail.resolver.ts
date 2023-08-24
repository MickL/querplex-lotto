import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { TicketDataService } from '../ticket-data.service';
import { Ticket } from '../interfaces/ticket.interface';

/**
 * TODO: Error handling
 */
export const ticketDetailResolver: ResolveFn<Ticket> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(TicketDataService).getTicket(route.paramMap.get('id')!);
};
