import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseURL = 'http://localhost:4200/api/';

  constructor(private httpClient: HttpClient) {}

  login(userName: any, passwordLogin: any): Observable<Login[]> {
    return this.httpClient.get<Login[]>(`${this.baseURL}`);
  }
}
