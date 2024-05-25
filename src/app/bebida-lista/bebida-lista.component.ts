import { Component, OnInit } from '@angular/core';
import { BebidaService } from '../bebida.service';
import { Bebida } from '../bebida';

@Component({
  selector: 'app-bebida-lista',
  templateUrl: './bebida-lista.component.html',
  styleUrls: ['./bebida-lista.component.css']
})
export class BebidaListaComponent implements OnInit {
  bebidas: Bebida[] = [];

  constructor(private bebidaService: BebidaService) { }

  ngOnInit(): void {
    this.obtenerBebidas();
  }

  obtenerBebidas(): void {
    this.bebidaService.obtenerBebidaLista().subscribe((data: Bebida[]) => {
      this.bebidas = data;
    });
  }
}
