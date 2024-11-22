import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospedajeService } from '../services/hospedaje.service';
@Component({
  selector: 'app-alta-hospedaje',
  templateUrl: './alta-hospedaje.component.html',
  styleUrls: ['./alta-hospedaje.component.css']
})
export class AltaHospedajeComponent implements OnInit{
  descripcion: string = '';
  imagen: string = '';
  precioPorNoche: string = '';
  ciudadId: number | null = null;
  tipoHospedajeId: number | null = null;
  serviciosIds: number[] = [];
  ciudades: any[] = [];
  tiposHospedaje: any[] = [];
  servicios: any[] = [];

  constructor(private hospedajeService: HospedajeService, private router: Router) {}

  ngOnInit(): void {
    this.hospedajeService.obtenerCiudades().subscribe(data => {
      this.ciudades = data;
    });

    this.hospedajeService.obtenerTiposHospedaje().subscribe(data => {
      this.tiposHospedaje = data;
    });

    this.hospedajeService.obtenerServicios().subscribe(data => {
      this.servicios = data;
    });
  }

  crearHospedaje() {
    if (!this.descripcion || !this.imagen || !this.precioPorNoche || !this.ciudadId || !this.tipoHospedajeId) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const nuevoHospedaje = {
      descripcion: this.descripcion,
      imagen: this.imagen,
      precioPorNoche: this.precioPorNoche,
      ciudadId: this.ciudadId,
      tipoHospedajeId: this.tipoHospedajeId,
      serviciosIds: this.serviciosIds
    };
    console.log("Datos enviados:", nuevoHospedaje);

    this.hospedajeService.crearHospedaje(nuevoHospedaje).subscribe({
      next: () => {
        alert('Hospedaje agregado con éxito');
        this.router.navigate(['/host-dashboard']);
      },
      error: (err) => {
        console.error('Error al agregar el hospedaje:', err);
        alert('Hubo un error al agregar el hospedaje. Por favor, intenta nuevamente.');
      }
    });
  }
}
