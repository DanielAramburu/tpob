import { EventTicket } from "./event-ticket";

export class Cart {
    public cart : EventTicket[]
    
    constructor(){
        this.cart = []
    }

    public isEmpty(): boolean {
        return this.cart.length === 0;
    }
}
