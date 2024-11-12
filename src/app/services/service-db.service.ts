import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDBService {
  private apiUrl = 'http://localhost:8080/api/services'; // URL de la API

  constructor(private http: HttpClient) {}

  obtenerServicios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  addService(service: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, service);
  }

  updateService(service: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${service.id}`, service);
  }

  deleteService(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
