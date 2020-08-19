import { Injectable } from '@angular/core';

// to use angular http client import it must add httpclient module to the app module.ts to use 
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  //service logic for httpService

//dependency inject httpClient
  constructor(private http: HttpClient) {
    
   }
   getBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries');
   }
}
