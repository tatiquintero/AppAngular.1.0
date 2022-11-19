import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonasComponent } from './personas/crear-personas/crear-personas.component';
import { EditarPersonasComponent } from './personas/editar-personas/editar-personas.component';
import { EliminarPersonasComponent } from './personas/eliminar-personas/eliminar-personas.component';
import { BuscarPersonasComponent } from './personas/buscar-personas/buscar-personas.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { BuscarProductoComponent } from './producto/buscar-producto/buscar-producto.component';


@NgModule({
  declarations: [
    CrearPersonasComponent,
    EditarPersonasComponent,
    EliminarPersonasComponent,
    BuscarPersonasComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent,
    BuscarProductoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
