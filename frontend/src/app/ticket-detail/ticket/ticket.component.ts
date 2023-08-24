import { Component, Input } from '@angular/core';

/**
 * TODO: Display full number range 1-49
 * TODO: Mark drawn numbers on number range
 * TODO: Make it pretty
 */
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent {
  @Input() numbers: number[];
}
