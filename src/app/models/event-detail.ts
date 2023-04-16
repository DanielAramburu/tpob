import { Event } from "./event";
import { Session } from "./session";

export class EventDetail {
    public event: Event | undefined
    public sessions:Session[] | undefined

    constructor(){}
}
