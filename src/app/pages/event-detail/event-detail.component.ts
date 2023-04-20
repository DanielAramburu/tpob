import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { EventDetailsService } from '../../services/event-details.service';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/models/session';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent {
  public sessionList:Session[] = []
  private dbInfo:any
  public availability : any = {}
  public selectedTickets: any = {}
  private id:string | null = ''
  constructor(private CartService:CartService, private EventDetailsService:EventDetailsService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id !== null){
      this.EventDetailsService.getEventDetails(this.id).subscribe((data:any) => {
        this.sessionList = data.sessions.sort((a:any, b:any) => a.date - b.date);

        this.dbInfo = data
        for (const iterator of this.sessionList) {
          iterator.dateFormat = new Date(iterator.date)
          this.availability[iterator.date] = iterator.availability
          this.selectedTickets[iterator.date] = 0
        }
      })
      let obj = this.CartService.myCart.find(obj => obj.id === this.id)
      if (obj) {
        for (const iterator of obj.ticket) {
          this.selectedTickets[iterator.date] = iterator.quantity
        }
      }
    }
  }

  checkRemove(date:string):void{
    if ((this.selectedTickets[date]) > 0) {
      this.selectedTickets[date] --;
      let index = this.CartService.myCart.findIndex(ticket => ticket.id === this.id);
      if (index !== -1) {
        let dateIndex = this.CartService.myCart[index].ticket.findIndex(ticketDate => ticketDate.date === date)

        if(dateIndex !== -1){
          this.CartService.myCart[index].ticket[dateIndex].quantity = this.selectedTickets[date];  
          
          if(this.CartService.myCart[index].ticket[dateIndex].quantity === 0){
            this.CartService.myCart[index].ticket.splice(dateIndex,1)
            if (this.CartService.myCart[index].ticket.length === 0){
              this.CartService.myCart.splice(index,1)
            }
          }
        }
      }
    }
    
  }
  checkAdd(date:string):void{
    if ((this.selectedTickets[date]) < this.availability[date]) {
      this.selectedTickets[date] ++;
      let index = this.CartService.myCart.findIndex(ticket => ticket.id === this.id);
      if (index === -1) {
        this.CartService.myCart.push({
          id:this.id ?? '',
          title:this.dbInfo.event.title,
          ticket: [{
            date:date,
            quantity:this.selectedTickets[date]
          }]
        })
        
      } else {
        let dateIndex = this.CartService.myCart[index].ticket.findIndex(ticketDate => ticketDate.date === date)

        if(dateIndex === -1){
          this.CartService.myCart[index].ticket?.push({
            date:date,
            quantity:this.selectedTickets[date]
          })
        } else {
            this.CartService.myCart[index].ticket[dateIndex].quantity = this.selectedTickets[date];          
        }
      }
    }
  }
  
}
