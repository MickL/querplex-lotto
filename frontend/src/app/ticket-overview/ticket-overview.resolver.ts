import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { TicketDataService } from '../ticket-data.service';
import { TicketOverview } from '../interfaces/ticket-overview.interface';

/**
 * TODO: Error handling
 */
export const ticketOverviewResolver: ResolveFn<TicketOverview> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(TicketDataService).getTickets();
};
