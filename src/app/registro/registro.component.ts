  import { Component } from '@angular/core';

  @Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
  })
  export class RegistroComponent {
    horario: string = '';
    nombre: string = '';
    cedula: string = '';
    sueldo: number | null = null;
    rol: string = '';
  
    onSubmit() {
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor
      console.log('Formulario enviado:', {
        horario: this.horario,
        nombre: this.nombre,
        cedula: this.cedula,
        sueldo: this.sueldo,
        rol: this.rol
      });
    }
  }
