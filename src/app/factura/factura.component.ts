import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { BebidaService } from '../bebida.service';
import { Cliente } from '../cliente';
import { Bebida } from '../bebida';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  mostrarInformacion: boolean = false;
  clienteNombre: string = '';
  productoNombre: string = '';
  disponibilidad: number = 0;
  clienteEncontrado: Cliente | null = null;
  bebidas: Bebida[] = [];
  facturaItems: any[] = [];
  subtotal: number = 0;
  impuestos: number = 0;
  total: number = 0;
  mensajeCliente: string = '';
  mensajeBebida: string = '';
  mensajeAgregado: string = '';

  constructor(private clienteService: ClienteService, private bebidaService: BebidaService) { }

  ngOnInit(): void { }

  buscarCliente(): void {
    this.clienteService.buscarCliente(this.clienteNombre).subscribe((clientes) => {
      if (clientes.length > 0) {
        this.clienteEncontrado = clientes[0];
        this.mensajeCliente = `Cliente encontrado: ${this.clienteEncontrado.nombre}`;
        // Llama a buscarBebida() después de encontrar el cliente
        this.buscarBebida();
      } else {
        this.clienteEncontrado = null;
        this.mensajeCliente = 'Cliente no encontrado';
      }
    }, (error) => {
      console.error('Error al buscar cliente:', error);
      this.mensajeCliente = 'Error al buscar cliente';
    });
  }
  
  buscarBebida(): void {
    if (this.productoNombre && this.disponibilidad > 0) {
      this.bebidaService.buscarBebida(this.productoNombre, this.disponibilidad).subscribe((bebida) => {
        console.log('Respuesta del servicio:', bebida);
        if (bebida) {
          this.procesarBebida(bebida);
        } else {
          this.mensajeBebida = 'Producto no encontrado';
        }
      }, (error) => {
        console.error('Error al buscar bebida:', error);
        this.mensajeBebida = 'Error al buscar producto';
      });
    } else {
      console.error('El nombre del producto y la disponibilidad deben ser válidos.');
      this.mensajeBebida = 'El nombre del producto y la disponibilidad deben ser válidos.';
    }
  }
  
  procesarBebida(bebida: any): void {
    if (bebida && bebida.precio !== undefined) {
      const cantidadDisponible = bebida.disponibilidad;
      const cantidadSeleccionada = this.disponibilidad;
  
      if (cantidadSeleccionada > cantidadDisponible) {
        this.mensajeBebida = `Producto "${bebida.nombre}" no tiene la cantidad solicitada (${cantidadSeleccionada}) disponible. Cantidad máxima: ${cantidadDisponible}`;
      } else {
        const subtotalItem = bebida.precio * cantidadSeleccionada;
        const impuestosItem = subtotalItem * 0.13;
        const totalItem = subtotalItem + impuestosItem;
        this.facturaItems.push({
          cliente: this.clienteNombre,
          codigoProducto: bebida.idBebida,
          nombreProducto: bebida.nombre,
          cantidad: cantidadSeleccionada,
          precioUnitario: bebida.precio,
          subTotal: subtotalItem,
          descuento: 0,
          impuestos: impuestosItem,
          totalLinea: totalItem
        });
  
        this.mostrarInformacion = true;
  
        this.subtotal += subtotalItem;
        this.impuestos += impuestosItem;
        this.total += totalItem;
  
        this.mensajeBebida = `Producto "${bebida.nombre}" agregado a la factura. Cantidad: ${cantidadSeleccionada}`;
      }
    } else {
      this.mensajeBebida = 'Producto encontrado, pero no tiene un precio definido.';
    }
  }
  calcularTotal(): void {
    this.subtotal = this.facturaItems.reduce((acc, item) => acc + item.subTotal, 0);
    this.impuestos = this.facturaItems.reduce((acc, item) => acc + item.impuestos, 0);
    this.total = this.facturaItems.reduce((acc, item) => acc + item.totalLinea, 0);
    this.mensajeAgregado = `El total de la factura ha sido recalculado. Subtotal: ${this.subtotal}, Impuestos: ${this.impuestos}, Total: ${this.total}`;
  }

}  