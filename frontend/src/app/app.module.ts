import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TicketOverviewComponent } from './ticket-overview/ticket-overview.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketComponent } from './ticket-detail/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketOverviewComponent,
    TicketDetailComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
