import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AdministradorComponent } from './administrador/administrador.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule y ReactiveFormsModule

import { InicioBarComponent } from './administrador/inicio-bar/inicio-bar.component';
import { CrearBarComponent } from './administrador/crear-bar/crear-bar.component';
import { ListarBarComponent } from './administrador/listar-bar/listar-bar.component';

import { BarListaComponent } from './bar-lista/bar-lista.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    AdministradorComponent,
    InicioBarComponent,
    CrearBarComponent,
    ListarBarComponent,
    BarListaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule  // Incluye ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
