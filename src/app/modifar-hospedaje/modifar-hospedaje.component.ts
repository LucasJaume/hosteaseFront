import { Component, OnInit } from '@angular/core';
import { HospedajeService } from '../services/hospedaje.service';

@Component({
  selector: 'app-modifar-hospedaje',
  templateUrl: './modifar-hospedaje.component.html',
  styleUrls: ['./modifar-hospedaje.component.css']
})
export class ModifarHospedajeComponent implements OnInit{
  hospedajes: any[] = [];
  hospedajeEnEdicion: any = null;

  ciudades: any[] = [];
  tiposHospedaje: any[] = [];
  servicios: any[] = [];

  constructor(private hospedajeService: HospedajeService) {}

  ngOnInit(): void {
    this.cargarHospedajes();
    this.cargarCiudades();
    this.cargarTiposHospedaje();
    this.cargarServicios();
  }

  cargarHospedajes(): void {
    this.hospedajeService.obtenerHospedajes().subscribe((data) => {
      this.hospedajes = data;
      console.log('Hospedajes carrgados: ',this.hospedajes);
      
    });
  }

  cargarCiudades(): void {
    this.hospedajeService.obtenerCiudades().subscribe((data) => {
      this.ciudades = data;
      console.log('Ciudades carrgados: ',this.ciudades);
    });
  }

  cargarTiposHospedaje(): void {
    this.hospedajeService.obtenerTiposHospedaje().subscribe((data) => {
      this.tiposHospedaje = data;
      console.log('tipo de Hospedajes carrgados: ',this.tiposHospedaje);
    });
  }

  cargarServicios(): void {
    this.hospedajeService.obtenerServicios().subscribe((data) => {
      this.servicios = data;
      console.log('Servicios carrgados: ',this.hospedajes);
    });
  }

  iniciarEdicion(hospedaje: any): void {
    this.hospedajeEnEdicion = { ...hospedaje };
  }

  guardarCambios(): void {
    if (this.hospedajeEnEdicion) {
      this.hospedajeService
        .editarHospedaje(this.hospedajeEnEdicion.id, this.hospedajeEnEdicion)
        .subscribe(
          () => {
            alert('Hospedaje actualizado con éxito.');
            this.hospedajeEnEdicion = null;
            this.cargarHospedajes();
          },
          (error) => {
            console.error('Error al guardar los cambios:', error);
            alert('Error al actualizar el hospedaje.');
          }
        );
    }
  }

  cancelarEdicion(): void {
    this.hospedajeEnEdicion = null;
  }
}
