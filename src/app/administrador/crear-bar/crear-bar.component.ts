// crear-bar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-bar',
  templateUrl: './crear-bar.component.html',
  styleUrls: ['./crear-bar.component.css']
})
export class CrearBarComponent {
  bar: any = {}; // Objeto para almacenar los datos del bar

  onSubmit() {
    // Aquí puedes agregar la lógica para guardar los datos del bar en la base de datos
    console.log('Datos del nuevo bar:', this.bar);
    // Luego puedes redirigir al usuario a otra página o realizar otras acciones necesarias
  }
}
