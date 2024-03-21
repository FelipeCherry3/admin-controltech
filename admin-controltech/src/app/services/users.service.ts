import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = "http://localhost:8080/users";

  constructor(private http: HttpClient) { }
  getUsers(): Observable<any[]> {
    this.baseUrl = this.baseUrl + "/all"
    return this.http.get<any[]>(this.baseUrl);
  }
}
