import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospedajeService {
  private apiUrl = 'http://localhost:8080/api/Hospedaje'; 
  private url = 'http://localhost:8080/api'

  constructor(private http: HttpClient) {}

  crearHospedaje(hospedaje: any): Observable<any> {
    const token = localStorage.getItem('token'); 
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/Crear`, hospedaje, { headers });
  }

  obtenerCiudades(): Observable<any> {
    const token = localStorage.getItem('token'); 
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get(`${this.url}/Ciudad/All`, { headers });
  }

  obtenerTiposHospedaje(): Observable<any> {
    const token = localStorage.getItem('token'); 
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get(`${this.url}/TipoHospedaje/All`, {headers});
  }

  obtenerServicios(): Observable<any> {
    const token = localStorage.getItem('token'); 
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get(`${this.url}/Servicio/All`,{headers});
  }

  eliminarHospedaje(id: number): Observable<void> {
    const token = localStorage.getItem('token'); 
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.delete<void>(`${this.apiUrl}/Delete/${id}`,{headers});
  }

  obtenerHospedajes(): Observable<any[]> {
    const token = localStorage.getItem('token'); 
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get<any[]>(`${this.apiUrl}/All`, {headers});
  }

  editarHospedaje(id: number, hospedaje: any): Observable<any> {
    const token = localStorage.getItem('token'); 
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    return this.http.put(`${this.apiUrl}/edit/${id}`, hospedaje, { headers });
  }
}