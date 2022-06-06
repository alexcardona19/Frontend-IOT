import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualizarUsuarioComponent } from './Componentes/gestionUsuario/actualizar-usuario/actualizar-usuario.component';
import { RegistrarUsuarioComponent } from './Componentes/gestionUsuario/registrar-usuario/registrar-usuario.component';
import { ListarUsuarioComponent } from './Componentes/gestionUsuario/listar-usuario/listar-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
   AppComponent,
   RegistrarUsuarioComponent,
   ActualizarUsuarioComponent,
   ListarUsuarioComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
