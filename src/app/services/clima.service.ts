import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  apiId: string = '7b53a249f3f179c9a4fd947524ea30bd';

  constructor(
    private http: HttpClient
  ) { }

  getDataAPI(city: string, country: string): Observable<Object> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.apiId}`);
  }

}
