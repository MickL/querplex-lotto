import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketOverviewComponent } from './ticket-overview/ticket-overview.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { ticketDetailResolver } from './ticket-detail/ticket-detail.resolver';
import { ticketOverviewResolver } from './ticket-overview/ticket-overview.resolver';

const routes: Routes = [
  {
    path: '',
    component: TicketOverviewComponent,
    resolve: {
      ticketOverview: ticketOverviewResolver,
    },
  },
  {
    path: 'ticket/:id',
    component: TicketDetailComponent,
    resolve: {
      ticket: ticketDetailResolver,
    },
  },
  {
    path: '*',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
