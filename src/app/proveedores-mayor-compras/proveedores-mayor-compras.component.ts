import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../reporte.service';
@Component({
  selector: 'app-proveedores-mayor-compras',
  templateUrl: './proveedores-mayor-compras.component.html',
  styleUrls: ['./proveedores-mayor-compras.component.css']
})
export class ProveedoresMayorComprasComponent implements OnInit{

  proveedores: any[];

  constructor(private reporteService: ReporteService) { }

  ngOnInit(): void {
    this.reporteService.obtenerProveedoresMayorCompras()
  .subscribe((data: any) => { // Cambiado a 'any'
    this.proveedores = data;
  });

  }
}