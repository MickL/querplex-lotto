import { Module } from '@nestjs/common';
import { TicketModule } from './ticket/ticket.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TicketModule,
    MongooseModule.forRoot('mongodb://localhost'), // TODO: Use env file
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
