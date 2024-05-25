import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CajeroComponent } from './cajero/cajero.component';
import { BebidaListaComponent } from './bebida-lista/bebida-lista.component';
import { ProveedorListaComponent } from './proveedor-lista/proveedor-lista.component';
import { ClientesMayorGastoComponent } from './clientes-mayor-gasto/clientes-mayor-gasto.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { FacturaComponent } from './factura/factura.component';
import { InicioFacturaComponent } from './inicio-factura/inicio-factura.component';

const routes: Routes = [
  { path: 'cajero', component: CajeroComponent },
  { path: 'clientes', component: ClienteListaComponent },
  { path: 'proveedores', component: ProveedorListaComponent },
  { path: 'inventario', component: BebidaListaComponent },
  { path: 'reportes', component: ClientesMayorGastoComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'inicio-factura', component: InicioFacturaComponent },
  { path: '', redirectTo: '/inicio-factura', pathMatch: 'full' },  // Ruta por defecto
  { path: '**', redirectTo: '/inicio-factura' }  // Ruta para manejar cualquier ruta no definida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
