import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bar } from './bar';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  private urlBase = "http://localhost:8081/bares-app/controller/bares";


  constructor(private clienteHttp: HttpClient) { }

  obtenerBaresLista(): Observable<Bar[]>{
    return this.clienteHttp.get<Bar[]>(this.urlBase);
  }
}
