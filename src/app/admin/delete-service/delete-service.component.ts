import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceDBService } from '../../services/service-db.service';

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.css']
})
export class DeleteServiceComponent implements OnInit {
  services: any[] = [];
  selectedServiceId: number | null = null;

  constructor(private serviceDB: ServiceDBService, private router: Router) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.serviceDB.obtenerServicios().subscribe(data => {
      this.services = data;
    });
  }

  selectService(id: number): void {
    this.selectedServiceId = id;
  }

  onSubmit(): void {
    if (this.selectedServiceId !== null) {
      this.serviceDB.deleteService(this.selectedServiceId).subscribe(() => {
        alert('Servicio eliminado con éxito');
        this.loadServices();
        this.selectedServiceId = null;
      });
    }
  }
}