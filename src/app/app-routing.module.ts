import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from '../app/componentes/inicio/inicio.component';
import {ExperienciaComponent} from '../app/componentes/experiencia/experiencia.component';
import {AcademicoComponent} from '../app/componentes/academico/academico.component';

const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'experiencia',
    component:ExperienciaComponent
  },
  {
    path:'academico',
    component:AcademicoComponent
  },
  {
     path: '',
    redirectTo: 'inicio', pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
