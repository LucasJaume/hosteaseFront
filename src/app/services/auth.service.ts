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
    return this.http.post(`${this.apiUrl}/login`, {'username':email,'password': password});
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
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role || null;
    }
    return null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}
