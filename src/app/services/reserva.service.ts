import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
 private apiUrl='http://localhost:8080/api/Reserva';
  constructor(private http: HttpClient) { }

  crearReserva(crearReservaDTO: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/Crear`, crearReservaDTO, { headers });
  }

  obtenerReservas(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl}/All`, { headers });
  }

  eliminarReserva(idHospedaje: number, idUsuario: number): Observable<string> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<string>(`${this.apiUrl}/Delete/${idHospedaje}-${idUsuario}`, { headers });
  }
  
  editarReserva(idHospedaje: number, idUsuario: number, editReservaDTO: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.put(`${this.apiUrl}/edit/${idHospedaje}-${idUsuario}`, editReservaDTO, { headers });
  }

}
