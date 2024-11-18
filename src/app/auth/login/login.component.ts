import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso');
        console.log('Mis datos son: ', response)
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', response.username);
        localStorage.setItem('role', response.role);

        const role = response.role;
        if (role === 'ADMINISTRADOR') {
          this.router.navigate(['/admin-dashboard']);
        } else if (role === 'INQUILINO') {
          this.router.navigate(['/host-dashboard']);
        }
      },
      error: (err) => {
        console.log('Inicio de sesión erroneo', err);
        console.log("mis datos son: ", this.email, this.password);
        alert('Credenciales incorrectas');
      }
    });
  }
  
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
