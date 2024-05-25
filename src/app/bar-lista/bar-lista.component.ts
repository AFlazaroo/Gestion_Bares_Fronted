import { Component } from '@angular/core';
import { Bar } from '../bar';
import { BarService } from '../bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-lista',
  templateUrl: './bar-lista.component.html',
  styleUrls: ['./bar-lista.component.css']
})
export class BarListaComponent {
  bares: Bar[];

  constructor(private barServicio: BarService, private enrutator:Router){}
  
  ngOnInit(){
    this.obtenerBares();
  }

  private obtenerBares(){
    this.barServicio.obtenerBaresLista().subscribe(
      (datos => {this.bares = datos;})
    )
  }

  editarBar(id:number){
    this.enrutator.navigate(['editar-bar', id])
  }

}
