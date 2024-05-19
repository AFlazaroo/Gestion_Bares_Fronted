import { Component } from '@angular/core';
import { Bar } from '../bar';
import { BarService } from '../bar.service';

@Component({
  selector: 'app-bar-lista',
  templateUrl: './bar-lista.component.html',
  styleUrls: ['./bar-lista.component.css']
})
export class BarListaComponent {
  bares: Bar[];

  constructor(private barServicio: BarService){}
  
  ngOnInit(){
    this.obtenerBares();
  }

  private obtenerBares(){
    this.barServicio.obtenerBaresLista().subscribe(
      (datos => {this.bares = datos;
        
      })

    )
  }

}
