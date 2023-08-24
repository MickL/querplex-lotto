import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TicketDataService } from '../ticket-data.service';
import { TicketSummary } from '../interfaces/ticket-overview.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.scss'],
})
export class TicketOverviewComponent implements OnInit {
  amount = new FormControl(1, [Validators.required, Validators.min(1)]);
  tickets: TicketSummary[] = [];

  constructor(
    private dataService: TicketDataService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ ticketOverview }) => {
      this.tickets = ticketOverview.items;
    });
  }

  onCreateTicket(amount: number) {
    // TODO: Show loading animation
    // TODO: Error handling
    this.dataService.createTickets(amount).subscribe((ticketSummary) => {
      this.tickets.push(ticketSummary);
    });
  }

  trackByFn(index: number, ticketSummary: TicketSummary): string {
    return ticketSummary.id;
  }
}
