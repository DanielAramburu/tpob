import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from 'src/app/models/event';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  public events:Event[] = []
  constructor(private EventsService:EventsService){}
  ngOnInit(): void {
    this.EventsService.getEvents().subscribe((data:any)=>{
      this.events = data
    }) 
  }
}
