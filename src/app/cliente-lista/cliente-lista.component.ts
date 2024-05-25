import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  clientes: Cliente[]; // Cambié el nombre de la variable a plural para reflejar que es una lista de clientes

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.obtenerClientes(); // Llamamos al método correcto
  }

  private obtenerClientes() {
    this.clienteService.obtenerClienteLista().subscribe(
           datos=> {
        this.clientes = datos;
      }
    )
  }
}
