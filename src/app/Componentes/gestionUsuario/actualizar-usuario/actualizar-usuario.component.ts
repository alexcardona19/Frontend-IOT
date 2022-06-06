import { Component, OnInit } from '@angular/core';
import  swal  from 'sweetalert2';
import { UsuarioService } from '../../../Servicios/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Modelos/usuario';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  id:number;
  usuario:Usuario = new Usuario();
  constructor(private usuarioService:UsuarioService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usuarioService.obtenerUsuarioPorId(this.id).subscribe(dato =>{
      this.usuario = dato;
    },error => console.log(error));
  }

  irAlaListaDeUsuarios(){
    this.router.navigate(['/usuarios']);
    swal('Usuario actualizado',`El usuario ${this.usuario.userName} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.usuarioService.actualizarUsuario(this.id,this.usuario).subscribe(dato => {
      this.irAlaListaDeUsuarios();
    },error => console.log(error));
  }
}
