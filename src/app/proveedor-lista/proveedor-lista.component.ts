import { Component } from '@angular/core';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedor-lista',
  templateUrl: './proveedor-lista.component.html',
  styleUrls: ['./proveedor-lista.component.css']
})
export class ProveedorListaComponent {
  proveedor: Proveedor[];
  constructor(private proveedorServicio: ProveedorService){}
  ngOnInit(){

    this.obtenerProveedor();
  }

  private obtenerProveedor(){
    this.proveedorServicio.obtenerProveedorLista().subscribe(
      datos => {
        this.proveedor = datos;
      }
    )
  }
  

}
