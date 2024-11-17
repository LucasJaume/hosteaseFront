import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const role = this.authService.getRole();
    if (role) {
      return true; // Permitir acceso si hay un rol
    } else {
      this.router.navigate(['/login']);
      return false; // Redirigir al login si no hay rol
    }
  }
}