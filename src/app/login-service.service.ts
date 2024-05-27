import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseUrl = 'http://localhost:8081/bares-app/controllerEmpleado';

  constructor(private http: HttpClient) { }

  login(email: string, contrasena: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ email, contrasena });
    return this.http.post<any>(${this.baseUrl}/login, body, { headers });
  }
}