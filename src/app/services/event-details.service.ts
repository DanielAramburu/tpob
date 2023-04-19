import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsService {

  constructor( private http:HttpClient) { }
  getEventDetails(id:string):Observable<any>{
    let url = `./../assets/data/event-info-${id}.json`
    return this.http.get(url)
  }
}
