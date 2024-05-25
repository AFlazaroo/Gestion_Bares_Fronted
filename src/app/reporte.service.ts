import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private baseURL = 'http://localhost:8081/api/reporte';

  constructor(private http: HttpClient) { }

  obtenerClientesMayorGasto() {
    return this.http.get(`${this.baseURL}/clientes-mayor-gasto`);
  }

  obtenerProveedoresMayorCompras() {
    return this.http.get(`${this.baseURL}/proveedores-mayor-compras`);
  }
}