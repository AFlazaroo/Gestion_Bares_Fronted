import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { BarListaComponent } from './bar-lista/bar-lista.component';
import { CajeroComponent } from './cajero/cajero.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ProveedorListaComponent } from './proveedor-lista/proveedor-lista.component';
import { BebidaListaComponent } from './bebida-lista/bebida-lista.component';
import { ClientesMayorGastoComponent } from './clientes-mayor-gasto/clientes-mayor-gasto.component';
import { ProveedoresMayorComprasComponent } from './proveedores-mayor-compras/proveedores-mayor-compras.component';
import { FacturaComponent } from './factura/factura.component';
import { InicioFacturaComponent } from './inicio-factura/inicio-factura.component';
import { AdministradorComponent } from './administrador/administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BarListaComponent,
    CajeroComponent,
    ClienteListaComponent,
    ProveedorListaComponent,
    BebidaListaComponent,
    ClientesMayorGastoComponent,
    ProveedoresMayorComprasComponent,
    FacturaComponent,
    InicioFacturaComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
