import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:8080/api/post/show-all';  // Backend API URL

  constructor(private http: HttpClient) { }

  // Method to fetch all posts
  getPosts(): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl, {});  // Passing an empty object to the POST request
  }
}
