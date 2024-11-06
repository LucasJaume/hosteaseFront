import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  surname: string = '';
  dni: string = '';
  email: string = '';
  password: string = '';
  role: string = 'inquilino';

  constructor(private router: Router) {}

  onSubmit() {
    // Aquí iría la lógica para registrar al usuario
    // Por ahora, solo mostramos un mensaje de éxito
    alert('Usuario registrado con éxito');
    this.router.navigate(['/login']);
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}
