import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-dashboard',
  templateUrl: './guest-dashboard.component.html',
  styleUrls: ['./guest-dashboard.component.css']
})
export class GuestDashboardComponent {

  constructor (private router:Router){}

  Reservar(){
    this.router.navigate(['/reservar-hospedaje']);
  }

  editar(){
    this.router.navigate(['/modificar-reserva']);
  }

  eliminar(){
    this.router.navigate(['/cancelar-reserva']);
  }
}
