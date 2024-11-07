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

  onSubmit() {
    const newService = {
      name: this.serviceName,
      category: this.serviceCategory
    };

    this.serviceDB.addService(newService).subscribe(() => {
      alert('Servicio agregado con éxito');
      this.router.navigate(['/admin-dashboard']);
    });
  }
}
