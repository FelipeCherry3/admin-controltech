import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://localhost:8080/dashboard';  // URL da sua API

  constructor(private http: HttpClient) {}

  // Método para buscar dados do dashboard
  getDashboardData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
