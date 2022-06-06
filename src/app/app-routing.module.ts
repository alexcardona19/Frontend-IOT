import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './Componentes/gestionUsuario/registrar-usuario/registrar-usuario.component';
import { ListarUsuarioComponent } from './Componentes/gestionUsuario/listar-usuario/listar-usuario.component';
import { ActualizarUsuarioComponent } from './Componentes/gestionUsuario/actualizar-usuario/actualizar-usuario.component';


const routes: Routes = [
  {path : 'usuarios',component: ListarUsuarioComponent},
  {path:'',redirectTo:'usuarios',pathMatch:'full'},
  /*   {path:'',redirectTo:'login',pathMatch:'full'}, */
  {path : 'actualizar-usuario/:id',component : ActualizarUsuarioComponent},
  {path : 'registrar-usuario',component : RegistrarUsuarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
