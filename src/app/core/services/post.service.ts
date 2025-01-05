import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // private apiUrl = 'http://localhost:8080/api/post'; // Base backend API URL
  private apiUrl: string = environment.apiUrl + environment.postRoute;

  constructor(private http: HttpClient) {}

  // Method to fetch all posts
  getPosts(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/show-all`, {}); // Replace URL if needed
  }

  // Method to like a post
  likePost(postId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${postId}/like`, {}); // Replace URL if needed
  }

  addComment(postId: string, content: string): Observable<any> {
    const url = `${this.apiUrl}/${postId}/comment`;
    return this.http.post<any>(url, { content });
  }

  // Method to get all comments for a post
  getComments(postId: string): Observable<any[]> {
    const url = `${this.apiUrl}/${postId}/comments`;
    return this.http.get<any[]>(url);
  }

  // Method to create a new post
  createPost(formData:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, formData);
  }

  getMyPosts(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/my-posts`, {});
  }
}
