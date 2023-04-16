export class Event {
    public id:string
    public title:string
    public subtitle:string
    public image:string 
    public place:string | null | undefined
    public startDate:string | null | undefined
    public endDate:string| null | undefined
    public description:string | null | undefined
    
    constructor (id:string, title:string, subtitle:string, image:string){
        this.id = id; 
        this.title = title;
        this.subtitle = subtitle; 
        this.image = image;
        
    }
    
}
