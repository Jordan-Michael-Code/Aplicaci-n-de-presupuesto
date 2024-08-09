import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ingresoServicio } from './ingreso/ingreso.service';
import { egresoServicio } from './egreso/ingreso.servicio';
import { FormsModule } from '@angular/forms';
import { AppRouthingModule } from './app-routhing.module';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    IngresoComponent,
    EgresoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouthingModule
  ],
  providers: [ingresoServicio, egresoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
