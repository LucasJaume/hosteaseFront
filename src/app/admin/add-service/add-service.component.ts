import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceDBService } from '../../services/service-db.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  serviceName: string = '';
  serviceCategory: string = '';

  constructor(private serviceDB: ServiceDBService, private router: Router) {}

  crearServicio() {
    if (!this.serviceName) {
      alert('Por favor, completa el nombre del servicio.');
      return;
    }

    this.serviceDB.crearServicio(this.serviceName).subscribe({
      next: (response) => {
        alert('Servicio agregado con éxito');
        console.log('Datos enviados son: ', response);
        console.log('Datos enviados son: ', this.serviceName);
        this.router.navigate(['/admin-dashboard']);
      },
      error: (err) => {
        console.error('Error al agregar el servicio:', err);
        alert('Hubo un error al agregar el servicio. Por favor, intenta nuevamente.');
      }
    });
  }
}
