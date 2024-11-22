import { Component, OnInit } from '@angular/core';
import { ServiceDBService } from '../../services/service-db.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
services: any[] = [];
  selectedService: any = null;

  constructor(private serviceDB: ServiceDBService) {}

  ngOnInit(): void {
   this.loadServices();
  }

   loadServices(): void {
     this.serviceDB.obtenerServicios().subscribe(data => {
       this.services = data;
     });
   }

   selectService(service: any): void {
    this.selectedService = { id: service.id, nombre: service.nombre };
  }
  

  onSubmit(): void {
    if (this.selectedService) {
      this.serviceDB.updateService(this.selectedService).subscribe(() => {
        alert('Servicio modificado con éxito');
        this.loadServices();
        this.selectedService = null;
      });
    }
  }
}
