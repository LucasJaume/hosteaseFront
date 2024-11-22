import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../services/reserva.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-reserva',
  templateUrl: './modificar-reserva.component.html',
  styleUrls: ['./modificar-reserva.component.css']
})
export class ModificarReservaComponent implements OnInit {
  reservas: any[] = []; 
  reservaSeleccionada: any = null; 
  editarForm: FormGroup;

  constructor(private reservaService: ReservaService, private router:Router, private fb: FormBuilder) {
    this.editarForm = this.fb.group({
      fechaCheckIn: ['', Validators.required],
      fechaCheckOut: ['', Validators.required],
      cantAdultos: [0, [Validators.required, Validators.min(1)]],
      cantNinos: [0, [Validators.required, Validators.min(0)]],
      cantMascotas: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.obtenerReservas();
  }

  obtenerReservas() {
    this.reservaService.obtenerReservas().subscribe({
      next: (data) => {
        console.log('Reservas obtenidas:', data); 
        this.reservas = data;
      },
      error: (err) => console.error('Error al obtener reservas', err),
    });
  }

  seleccionarReserva(reserva: any) {
    this.reservaSeleccionada = reserva.pkReserva;
    this.editarForm.patchValue({
      fechaCheckIn: reserva.fechaCheckIn,
      fechaCheckOut: reserva.fechaCheckOut,
      cantAdultos: reserva.cantAdultos,
      cantNinos: reserva.cantNinos,
      cantMascotas: reserva.cantMascotas,
    });
    console.log('MIS PK GUARDADOS',this.reservaSeleccionada);
    
  }

  guardarCambios() {
    if (this.editarForm.invalid) return;

    const editReservaDTO = this.editarForm.value;
    const { idHospedaje, idUsuario } = this.reservaSeleccionada;

    this.reservaService.editarReserva(idHospedaje, idUsuario, editReservaDTO).subscribe({
      next: () => {
        alert('Reserva modificada exitosamente');
        this.reservaSeleccionada = null;
        this.router.navigate(['/host-dashboard'])
      },
      error: (err) => console.error('Error al editar la reserva', err),
    });
  }

  cancelarEdicion() {
    this.reservaSeleccionada = null;
  }
}
