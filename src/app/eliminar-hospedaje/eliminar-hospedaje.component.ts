import { Component, OnInit } from '@angular/core';
import { HospedajeService } from '../services/hospedaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-hospedaje',
  templateUrl: './eliminar-hospedaje.component.html',
  styleUrls: ['./eliminar-hospedaje.component.css']
})
export class EliminarHospedajeComponent implements OnInit {
  hospedajes: any[] = []; 

  constructor(
    private hospedajeService: HospedajeService ,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerHospedajes();
  }

  obtenerHospedajes(): void {
    this.hospedajeService.obtenerHospedajes().subscribe(
      (data) => {
        this.hospedajes = data; 
      },
      (error) => {
        console.error('Error al obtener los hospedajes', error);
      }
    );
  }

  eliminarHospedaje(id: number): void {
    this.hospedajeService.eliminarHospedaje(id).subscribe(
      () => {
        alert('Hospedaje eliminado correctamente');
        this.router.navigate(['/host-dashboard'])
        this.obtenerHospedajes();
      },
      (error) => {
        console.error('Error al eliminar el hospedaje', error);
        alert('Hubo un error al intentar eliminar el hospedaje');
      }
    );
  }
}
