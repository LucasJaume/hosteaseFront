import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['1', Validators.required] // "1" para Inquilino y "2" para Anfitrión
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      alert('Por favor complete todos los campos correctamente.');
      return;
    }

    const user = {
      username: this.form.get('username')?.value,
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      fecha_nacimiento: this.form.get('fecha_nacimiento')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      tipoUsuarioIds: +this.form.get('role')?.value
    };

    this.authService.register(user).subscribe(
      response => {
        alert('Usuario registrado con éxito');
        this.router.navigate(['/login']);
      },
      error => {
        console.log("Mis datos!!!!!", user)
        console.error('Error en el registro:', error);
        alert('Error en el registro');
      }
    );
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}
