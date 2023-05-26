import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/Publico/login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './layout/Privado/principal/principal.component';
import { SegundoPisoComponent } from './layout/Privado/segundo-piso/segundo-piso.component';
import { MesaItemsComponent } from './layout/Privado/mesa-items/mesa-items.component';
import { EditMenuComponent } from './layout/Privado/edit-menu/edit-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    SegundoPisoComponent,
    MesaItemsComponent,
    EditMenuComponent
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
