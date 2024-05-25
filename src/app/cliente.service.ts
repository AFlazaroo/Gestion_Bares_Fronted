import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlBase = "http://localhost:8081/bares-app/controllerCliente";

  constructor(private clienteHttp: HttpClient) { }

  obtenerClienteLista(): Observable<Cliente[]> {
    return this.clienteHttp.get<Cliente[]>(`${this.urlBase}/clientes`);
  }

  buscarCliente(clienteNombre: String): Observable<Cliente[]> {
    return this.clienteHttp.get<Cliente[]>(`${this.urlBase}/buscar?nombre=${clienteNombre}`);
  }
}
