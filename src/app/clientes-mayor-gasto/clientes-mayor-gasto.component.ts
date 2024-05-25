import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../reporte.service';
@Component({
  selector: 'app-clientes-mayor-gasto',
  templateUrl: './clientes-mayor-gasto.component.html',
  styleUrls: ['./clientes-mayor-gasto.component.css']
})
export class ClientesMayorGastoComponent implements OnInit{
  clientes: any[];

  constructor(private reporteService: ReporteService) { }

  ngOnInit(): void {
    this.reporteService.obtenerClientesMayorGasto()
    .subscribe((data: any) => { // Cambiado a 'any'
      this.clientes = data;
    });
  
  }
}
