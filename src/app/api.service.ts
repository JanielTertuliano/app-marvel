import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL_API = '';
  API_KEY = '';
  HASH_KEY = '';

  constructor(private http: HttpClient) { }
}
