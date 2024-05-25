import { Component } from '@angular/core';
import { BarService } from '../bar.service';
import { Router } from '@angular/router';
import { Bar } from '../bar';

@Component({
  selector: 'app-registrar-bar',
  templateUrl: './registrar-bar.component.html',
  styleUrls: ['./registrar-bar.component.css']
})
export class RegistrarBarComponent {

  bar: Bar = new Bar(); 

  constructor(private barServicio: BarService){}

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){
    this.barServicio.agregarBar(this.bar).subscribe(
    {
      next:(datos) => {
        console.log("se agrego ecitosamente el Bar", this.bar);
        alert("Se agrego exitosamente un nuevo bar.");
      }, error: (error:any) => {console.log(error);}
    }
    );
  }

}
