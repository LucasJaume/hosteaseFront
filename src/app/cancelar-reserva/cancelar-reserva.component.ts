import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../services/reserva.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelar-reserva',
  templateUrl: './cancelar-reserva.component.html',
  styleUrls: ['./cancelar-reserva.component.css']
})
export class CancelarReservaComponent implements OnInit {
  reservas: any[] = []; 

  constructor(private reservaService: ReservaService, private router: Router) {}

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas(): void {
    this.reservaService.obtenerReservas().subscribe({
      next: (data) => {
        console.log('MIS DATOS DE RESERVA: ',data);
        
        this.reservas = data;
      },
      error: (err) => {
        console.error('Error al cargar reservas:', err);
      }
    });
  }

  cancelarReserva(idHospedaje: number, idUsuario: number) {
    this.reservaService.eliminarReserva(idHospedaje, idUsuario).subscribe({
      next: (response) => {
        console.log(response); 
        alert('Reserva cancelada exitosamente');
        this.router.navigate(['/host-dashboard']) 
      },
      error: (err) => {
        console.error('Error al cancelar la reserva:', err);
        alert('Hubo un error al cancelar la reserva. Por favor, inténtalo nuevamente.');
      },
    });
  }
  
}
