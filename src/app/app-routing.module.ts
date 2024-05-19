import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { InicioBarComponent } from './administrador/inicio-bar/inicio-bar.component';
import { CrearBarComponent } from './administrador/crear-bar/crear-bar.component';

const routes: Routes = [
  {
    path: 'administrador',
    component: AdministradorComponent,
    children: [
      { path: 'inicio-bar', component: InicioBarComponent },
      { path: 'crear-bar', component: CrearBarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
