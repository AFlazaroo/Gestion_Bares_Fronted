import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CajeroComponent } from './cajero/cajero.component';
import { BebidaListaComponent } from './bebida-lista/bebida-lista.component';
import { ProveedorListaComponent } from './proveedor-lista/proveedor-lista.component';
import { ClientesMayorGastoComponent } from './clientes-mayor-gasto/clientes-mayor-gasto.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { FacturaComponent } from './factura/factura.component';
import { InicioFacturaComponent } from './inicio-factura/inicio-factura.component';
import { BarListaComponent } from './bar-lista/bar-lista.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { RegistrarBarComponent } from './registrar-bar/registrar-bar.component';
import { EditarBarComponent } from './editar-bar/editar-bar.component';

const routes: Routes = [
  { path: 'inicio-administrador', component: AdministradorComponent },
  { path: 'registro-bar/:id', component: RegistrarBarComponent },
  { path: 'lista-bar', component: BarListaComponent },
  { path: 'registro-bebida', component: RegistrarBarComponent },
  { path: 'listar-bebida', component: BebidaListaComponent },
  { path: 'editar-bar', component: EditarBarComponent },
  { path: 'cajero', component: CajeroComponent },
  { path: 'clientes', component: ClienteListaComponent },
  { path: 'proveedores', component: ProveedorListaComponent },
  { path: 'inventario', component: BebidaListaComponent },
  { path: 'reportes', component: ClientesMayorGastoComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'inicio-factura', component: InicioFacturaComponent },
  { path: '', redirectTo: '/inicio-factura', pathMatch: 'full' },
 //,{ path: '**', redirectTo: '/inicio-factura' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
