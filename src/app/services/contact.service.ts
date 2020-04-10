import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  public SendEmail(mailConfig: any): Observable<any> {
    try {
      return this.httpClient.post<any>(`${environment.contactSrv}/bymail`, mailConfig);
    } catch (ex) {
      throw new Error(ex);
    }
  }
}
