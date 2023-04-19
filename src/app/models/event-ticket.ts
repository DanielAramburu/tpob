export class EventTicket {
    public id:string
    public title:string
    public ticket: {
        date:string
        quantity:number
    }[]

    constructor (id:string, title:string, ticket:[]){
        this.id = id
        this.title = title
        this.ticket = ticket
    }
}
