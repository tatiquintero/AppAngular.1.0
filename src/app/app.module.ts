import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './plantillas/barra-navegacion/barra-navegacion.component';
import { PiepaginaComponent } from './plantillas/piepagina/piepagina.component';
import { InicioComponent } from './plantillas/inicio/inicio.component';
import { ErrorComponent } from './plantillas/error/error.component';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PiepaginaComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
