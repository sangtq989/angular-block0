import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { TicketService } from '../service/ticket.serivce';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tickets: any[] = [];
  description: string = '';

  constructor(private fb: FormBuilder, private ticketMarketplaceService: TicketService) {
  }

  ngOnInit(): void {
    this.ticketMarketplaceService.getTickets().then((tickets: any[]) => {
      this.tickets = tickets;
      console.log(this.tickets);
    });
   
    
  }

  createTicket() {
    this.ticketMarketplaceService.createTicket(this.description).finally(() => {
      this.ngOnInit();
    });
    
  }

  acceptTicket(ticketIndex: number): void {
    this.ticketMarketplaceService.assignWorker(ticketIndex).then(() => {
      console.log(`Worker assigned to ticket with index ${ticketIndex}`);
      this.tickets[ticketIndex].status = 'Accept';
    }).finally(() => {
      this.ngOnInit();
    });
  }

  startTicket(ticketIndex: number): void {
    this.ticketMarketplaceService.startTicket(ticketIndex).then(() => {
      console.log(`Ticket with index ${ticketIndex} started`);
      this.tickets[ticketIndex].status = 'Doing';
    }).finally(() => {
      this.ngOnInit();
    });
  }

  finishTicket(ticketIndex: number): void {
    this.ticketMarketplaceService.finishTicket(ticketIndex).then(() => {
      console.log(`Ticket with index ${ticketIndex} finished`);
      this.tickets[ticketIndex].status = 'Done';
    }).finally(() => {
      this.ngOnInit();
    });
  }
}