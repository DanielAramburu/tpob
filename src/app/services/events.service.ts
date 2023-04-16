import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor( private http: HttpClient) { }

  getEvents():Observable<any>{
    const url = './../assets/data/events.json'
    return this.http.get(url)
  }
}
