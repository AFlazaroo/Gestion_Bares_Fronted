import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from './proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private urlBase = "http://localhost:8081/api/proveedores/proveedor"
  constructor(private clienteHttp: HttpClient) { }

  obtenerProveedorLista(): Observable<Proveedor[]>{
    return this.clienteHttp.get<Proveedor[]>(this.urlBase);
    
  }
}
