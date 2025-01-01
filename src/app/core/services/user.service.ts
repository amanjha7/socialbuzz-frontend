import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/user'; // Base URL for your API (adjust if needed)

  constructor(private http: HttpClient) {}

  // Method to get the current user's profile
  getMyProfile(): Observable<any> {
      // Make the GET request to fetch the current user's profile
    return this.http.get<any>(`${this.apiUrl}/profile`);
  }
}
