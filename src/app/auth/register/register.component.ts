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
      
    });
  }

  onSubmit() {
    
    if (this.form.invalid) {
      alert('Por favor complete todos los campos correctamente.');
      return;
    }

    const user = {
      'username': this.form.get('username')?.value,
      'nombre': this.form.get('nombre')?.value,
      'apellido': this.form.get('apellido')?.value,
      'fecha_nacimiento': this.form.get('fecha_nacimiento')?.value,
      'email': this.form.get('email')?.value,
      'password': this.form.get('password')?.value,
      //tipoUsuarioIds: +this.form.get('role')?.value
    };
    this.authService.register(user).subscribe({
      next: (prueba: Response) => {
        alert('Usuario registrado exitosamente!')
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.log("Mis datos!!!!!", user);
        console.error('Error en el registro:', err);
        alert('Error en el registro');
      }
  });
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}
