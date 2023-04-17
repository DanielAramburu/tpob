import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { EventTicket } from '../models/event-ticket';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public myCart:EventTicket[] = []
  constructor(){
  }
}
