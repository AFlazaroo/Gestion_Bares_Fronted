import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bebida } from './bebida';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {
  private urlBase = "http://localhost:8081/api/bebidas";

  constructor(private clienteHttp: HttpClient) { }

  obtenerBebidaLista(): Observable<Bebida[]> {
    return this.clienteHttp.get<Bebida[]>(`${this.urlBase}/bebida`);
  }

  buscarBebida(bebidaNombre: string, disponibilidad: number): Observable<Bebida[]> {
    let params = new HttpParams();
    params = params.append('nombre', bebidaNombre);
    params = params.append('disponibilidad', disponibilidad.toString());

    return this.clienteHttp.get<Bebida[]>(`${this.urlBase}/buscar`, { params: params });
  }
}
