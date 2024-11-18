import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-dashboard',
  templateUrl: './host-dashboard.component.html',
  styleUrls: ['./host-dashboard.component.css']
})
export class HostDashboardComponent {
  constructor(private router:Router){ }

  crear(){
    this.router.navigate(['/crear-hospedaje']);
  }

  editar(){
    this.router.navigate(['/modificar-hospedaje']);
  }
  
  eliminar(){
    this.router.navigate(['/eliminar-hospedaje']);
  }
}
