import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';

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

  deleteFromCart(id:any , index:number){
    const sessions = this.CartService.myCart.find(item => item.id === id)
    sessions?.ticket.splice(index,1)
    if(sessions?.ticket.length === 0){
      this.CartService.myCart = this.CartService.myCart.filter(obj => obj.id !== id);
    }
  }
}
