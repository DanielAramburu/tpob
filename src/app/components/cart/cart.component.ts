import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public myCart:any[]
  constructor (public CartService:CartService){
    this.myCart = []
  }

  deleteFromCart(id:any){
    this.myCart = this.myCart.filter(event => event.id !== id)
  }
}
