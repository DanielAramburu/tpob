export class Session {
    public date:string
    public availability:string
    public dateFormat?: Date

    constructor (date:string, availability:string){
        this.date = date;
        this.availability = availability;
    }
}
