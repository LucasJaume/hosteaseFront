import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceDBService {
  private apiUrl = 'http://localhost:8080/api/Servicio'; // URL de la API

  constructor(private http: HttpClient) {}

  obtenerServicios(): Observable<any> {
    const token = localStorage.getItem('token'); 
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    console.log('Este es mi token', token);
    return this.http.get(`${this.apiUrl}/All`, { headers }).pipe(
      tap(response => {
        console.log('response Del tap: ', response);
      })
    );
  }

  crearServicio(nombre: string): Observable<any> {
    const token = localStorage.getItem('token'); 
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    console.log('Este es mi token', token);
    console.log('Este es mi nombre', nombre);
    return this.http.post(`${this.apiUrl}/crear`, { nombre }, { headers }).pipe(
      tap(response => {
        console.log('response Del tap: ', response);
      })
    );
  }

  updateService(service: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${service.id}`, service);
  }

  deleteService(id: number): Observable<any> {
    const token = localStorage.getItem('token'); 
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }
}