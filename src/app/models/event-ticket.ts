export class EventTicket {
    public id:string
    public title:string
    public date:string
    public quantity:number

    constructor (id:string, title:string, date:string, quantity:number){
        this.id = id
        this.title = title
        this.date = date
        this.quantity = quantity
    }
}
