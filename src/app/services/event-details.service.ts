import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsService {

  constructor( private http:HttpClient) { }
  getEventDetails(url:string):Observable<any>{
    return this.http.get(url)
  }
}
