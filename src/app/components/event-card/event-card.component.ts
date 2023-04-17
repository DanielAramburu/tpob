import { Component, Input } from '@angular/core';
import { Event } from '../../models/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  @Input() event: any;

  ngOnInit(): void {
    this.event.startDate = new Date(Number(this.event.startDate))
    this.event.endDate = new Date(Number(this.event.endDate))
  }
}
