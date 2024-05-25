import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bebida } from './bebida.model';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class BebidaServiceService {

  constructor() { }
}
