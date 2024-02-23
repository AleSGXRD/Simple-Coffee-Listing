import { HttpClient } from '@angular/common/http';
import { Injectable, Injector, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  private URL = "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
  private http:HttpClient;

  constructor(
    private injector: Injector
  ) { 
    this.http = injector.get(HttpClient);
  }

  getCoffeeList(): Observable<any>{
    return this.http.get<any>(this.URL);
  }
}
