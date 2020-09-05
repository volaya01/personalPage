import {Form} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { AcademicoComponent } from './componentes/academico/academico.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ExperienciaComponent,
    AcademicoComponent
  ],
  imports: [
    BrowserModule,
    //Form,
    AppRoutingModule,
    NgbModule
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
