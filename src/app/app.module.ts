import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/Publico/login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './layout/Privado/principal/principal.component';
import { CajaComponent } from './layout/Privado/caja/caja.component';
import { ConfiguracionDeMenuComponent } from './layout/Privado/configuracion-de-menu/configuracion-de-menu.component';
import { HistorialDeVentaComponent } from './layout/Privado/historial-de-venta/historial-de-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    CajaComponent,
    ConfiguracionDeMenuComponent,
    HistorialDeVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
