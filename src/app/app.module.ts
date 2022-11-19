import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdentificacionComponent } from './modulo/seguridad/identificacion/identificacion.component';
import { BarraNavegacionComponent } from './plantillas/barra-navegacion/barra-navegacion.component';
import { PiepaginaComponent } from './plantillas/piepagina/piepagina.component';
import { InicioComponent } from './plantillas/inicio/inicio.component';
import { ErrorComponent } from './plantillas/error/error.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    IdentificacionComponent,
    BarraNavegacionComponent,
    PiepaginaComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
