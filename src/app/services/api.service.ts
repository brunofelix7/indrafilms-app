import { User } from './../model/user';
import { ApiResponse } from './../model/api-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://indrafilmsapi.herokuapp.com';
  private apiMovieDb = 'https://api.themoviedb.org/3/movie/popular?api_key=0869c06b9999f9f3106978f6ef084181';

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<ApiResponse>(`${this.apiUrl}/api/auth`, user);
  }

  fetchMovies(token: string) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    };
    return this.http.get<any>(`${this.apiMovieDb}`);
  }

}
