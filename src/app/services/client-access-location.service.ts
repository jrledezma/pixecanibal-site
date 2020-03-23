import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientAccessLocationService {

  constructor(private httpClient: HttpClient) { }

  public getAccessInfo(): Observable<any> {
    try {
      return this.httpClient.get(`http://ip-api.com/json`);
    } catch (ex) {
      throw new Error(ex);
    }
  }

}
