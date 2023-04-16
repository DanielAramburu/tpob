import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public myCart:Cart = new Cart
  constructor(){
    this.myCart = this.myCart.isEmpty() ? new Cart() : this.myCart;
  }
}
