import { Component, OnInit } from '@angular/core';
import  swal  from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelos/usuario';
import { UsuarioService } from 'src/app/Servicios/usuario.service';


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios:Usuario[];
  
  constructor(private usuarioService:UsuarioService,private router:Router) { }
  
  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  actualizarUsuario(id:number){
    this.router.navigate(['actualizar-usuario',id]);
  }

  private obtenerUsuarios(){
    this.usuarioService.obtenerListaDeUsuarios().subscribe(dato => {
      this.usuarios = dato;
      console.log(dato)
    });
  }

    eliminarUsuario(id:number){
      swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar al usuario",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , elimínalo',
        cancelButtonText: 'No, cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true
      }).then((result) => {
        if(result.value){
          this.usuarioService.eliminarUsuario(id).subscribe(dato => {
            this.obtenerUsuarios();
            swal(
              'usuario eliminado',
              'El usuario ha sido eliminado con exito',
              'success'
            )
          })
        }
      })
    }


  verDetallesDelUsuario(id:number){
    this.router.navigate(['usuario-detalles',id]);
  }

}
