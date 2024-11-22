import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../services/reserva.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospedajeService } from '../services/hospedaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservar-hospedaje',
  templateUrl: './reservar-hospedaje.component.html',
  styleUrls: ['./reservar-hospedaje.component.css'],
})
export class ReservarHospedajeComponent implements OnInit {
  hospedajes: any[] = [];
  reservaForm: FormGroup;

  constructor(
    private reservaService: ReservaService,
    private hospedajeService: HospedajeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.reservaForm = this.fb.group({
      idHospedaje: ['', Validators.required],
      fechaCheckIn: ['', Validators.required],
      fechaCheckOut: ['', Validators.required],
      cantAdultos: [0, [Validators.required, Validators.min(1)]],
      cantNinos: [0, Validators.required],
      cantBebes: [0, Validators.required],
      cantMascotas: [0, Validators.required],
    });
  }

  ngOnInit(): void {
    this.cargarHospedajes();
  }

  cargarHospedajes(): void {
    this.hospedajeService.obtenerHospedajes().subscribe(
      (data) => {
        console.log('DATOS DE HOSPEDAJE',data);
        
        this.hospedajes = data;
      },
      (error) => {
        console.error('Error al cargar hospedajes', error);
      }
    );
  }

  crearReserva(): void {
    if (this.reservaForm.invalid) {
      alert('Completa todos los campos correctamente');
      return;
    }

    const idUsuario = localStorage.getItem('id'); 
    if (!idUsuario) {
      alert('Error: No se encontró el usuario');
      return;
    }

    const reservaData = {
      ...this.reservaForm.value,
      idUsuario: Number(idUsuario),
    };

    this.reservaService.crearReserva(reservaData).subscribe(
      (response) => {
        alert('Reserva creada exitosamente');
        this.router.navigate(['/host-dashboard'])
        console.log(response);
      },
      (error) => {
        console.error('Error al crear la reserva', error);
        alert('Error al crear la reserva');
      }
    );
  }
}
