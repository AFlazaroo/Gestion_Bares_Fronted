import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bebida } from './bebida';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {
<<<<<<< HEAD
  private urlBase = "http://localhost:8081/bares-app/controllerBebida";
=======
  private urlBase = "http://localhost:8081/bares-app/controllerBebida/bebida";
>>>>>>> 942cb8808b46b18248b38bf48841755fd4ba8273

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

  agregarBebida(bebida:Bebida){
    return this.clienteHttp.post(this.urlBase, bebida);
  }
}
