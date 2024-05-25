import { Component } from '@angular/core';
import { Bebida } from '../bebida';
import { BebidaService } from '../bebida.service';

@Component({
  selector: 'app-registrar-bebida',
  templateUrl: './registrar-bebida.component.html',
  styleUrls: ['./registrar-bebida.component.css']
})
export class RegistrarBebidaComponent {

  bebida: Bebida = new Bebida();

  constructor(private bebidaServicio:BebidaService){}

  onSubmmit(){
    this.guardarBebida();
  }

  guardarBebida(){
    this.bebidaServicio.agregarBebida(this.bebida).subscribe(
      {
        next:(datos)=>{
          alert("Se agrego exiotosamente la nueva bebida.")
        },error:(error:any)=>{ console.log(error) }
      }
    );
  }

}
