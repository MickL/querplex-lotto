import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  CreateTicketDto,
  CreateTicketResponseDto,
  GetTicketsResponseDto,
  BE_ROUTES,
  GetTicketResponseDto,
} from '@shared';
import { environment } from '../environments/environment';
import { Ticket } from './interfaces/ticket.interface';
import {
  TicketOverview,
  TicketSummary,
} from './interfaces/ticket-overview.interface';

/**
 * TODO: Add error handling
 */
@Injectable({
  providedIn: 'root',
})
export class TicketDataService {
  constructor(private http: HttpClient) {}

  /**
   * Create a ticket with the number of boxes, returns its id
   */
  createTickets(amount = 1): Observable<TicketSummary> {
    const body: CreateTicketDto = {
      amount,
    };

    return this.http.post<CreateTicketResponseDto>(
      `${environment.apiUrl}/${BE_ROUTES.tickets}`,
      body,
    );
  }

  /**
   * Get ids of created tickets
   */
  getTickets(): Observable<TicketOverview> {
    return this.http
      .get<GetTicketsResponseDto>(`${environment.apiUrl}/${BE_ROUTES.tickets}`)
      .pipe(
        map((dto) => {
          const ticketOverview: TicketOverview = {
            items: dto.items.map((item) => {
              return {
                ...item,
              };
            }),
          };

          return ticketOverview;
        }),
      );
  }

  /**
   * Get a specific ticket by id
   */
  getTicket(id: string): Observable<Ticket> {
    return this.http.get<GetTicketResponseDto>(
      `${environment.apiUrl}/${BE_ROUTES.tickets}/${id}`,
    );
  }
}
