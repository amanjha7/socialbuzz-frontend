import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private apiUrl = 'http://localhost:8080/api/user'; // Base URL for your API (adjust if needed)
  private apiUrl:string = environment.apiUrl + environment.userRoute;

  constructor(private http: HttpClient) {}

  // Method to get the current user's profile
  getMyProfile(): Observable<any> {
      // Make the GET request to fetch the current user's profile
    return this.http.get<any>(`${this.apiUrl}/profile`);
  }

  updateUserProfile(updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/profile`, updatedData);
  }
}
