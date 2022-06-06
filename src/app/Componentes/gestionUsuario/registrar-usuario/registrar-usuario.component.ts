import { UsuarioService } from './../../../Servicios/usuario.service';
import { Usuario } from '../../../Modelos/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario : Usuario = new Usuario();
  constructor(private usuarioService:UsuarioService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarUsuario(){
    this.usuarioService.registrarUsuario(this.usuario).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeUsuarios();
    },error => console.log(error));
  }

  irALaListaDeUsuarios(){
    this.router.navigate(['/usuarios']);
    Swal('Usuario registrado',`El usuario ${this.usuario.userName} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarUsuario();
  }

}
