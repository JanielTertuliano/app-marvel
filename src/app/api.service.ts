import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL_API = 'https://gateway.marvel.com/v1/public/';
  API_KEY = '';
  HASH_KEY = '';

  constructor(private http: HttpClient) { }

  getMarvel() {
    return this.http.get(`${this.URL_API}=${this.API_KEY}&hash=${this.HASH_KEY}`);
  }
}
