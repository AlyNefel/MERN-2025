import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {jwtDecode }from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { }
  register(username: string,email:string,password:string):Observable<any>{
    return this.http.post(`${this.apiUrl}/register`,{username,email,password})
  }
  //Login
  login(email:string,password:string):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,{email,password})
  }

  
  getUsername(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`);
  }



  getUsernameFromToken(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.user.username;
    }
    return null;
  }

  
}
