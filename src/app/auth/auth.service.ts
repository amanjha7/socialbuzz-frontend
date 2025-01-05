import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private baseUrl = 'http://localhost:8080/api/auth';
  private baseUrl:string = environment.apiUrl + environment.authRoute;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { username, email, password });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  changePassword(passwordData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/change-password`, passwordData);
  }
}
