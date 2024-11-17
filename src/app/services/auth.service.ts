import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { 'username': email, 'password': password }).pipe(
      tap(response => {
        console.log(response)
        
      })
    );
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

register(user: any): Observable<any> {
  

  return this.http.post(`${this.apiUrl}/register`, user).pipe(
    catchError((error) => {
      console.error('Error occurred:', error);
      throw error;
    })
  );
}

  getToken(): string | null {
    return localStorage.getItem('role');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}
