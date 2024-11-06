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

  onSubmit() {
    if (!this.authService.login(this.email, this.password)) {
      alert('Credenciales incorrectas');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
