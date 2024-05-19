import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  mostrarListarBares: boolean = false; 
  isHandset$: Observable<boolean>;
  opened: boolean = true; // Inicializamos opened para evitar el error en el template

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  ngOnInit(): void {
    // Puedes añadir lógica adicional aquí si es necesario
  }

  mostrarComponenteListarBares(): void {
    this.mostrarListarBares = true;
}}
