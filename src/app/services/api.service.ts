import { User } from './../model/user';
import { ApiResponse } from './../model/api-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://indrafilmsapi.herokuapp.com/';

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<ApiResponse>(this.apiUrl + 'api/auth', user);
  }
}
