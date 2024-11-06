import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: string | null = null;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    // Simulación de autenticación
    if (email === 'admin@example.com' && password === 'password') {
      this.role = 'admin';
      this.router.navigate(['/admin-dashboard']);
      return true;
    } else if (email === 'host@example.com' && password === 'password') {
      this.role = 'host';
      this.router.navigate(['/host-dashboard']);
      return true;
    } else if (email === 'guest@example.com' && password === 'password') {
      this.role = 'guest';
      this.router.navigate(['/guest-dashboard']);
      return true;
    } else {
      return false;
    }
  }

  getRole(): string | null {
    return this.role;
  }

  logout() {
    this.role = null;
    this.router.navigate(['/login']);
  }
}
