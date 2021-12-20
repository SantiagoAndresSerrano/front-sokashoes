import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  username = "";
  usuario!:any;
  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];
  pag = 0;
  compras:any[] = [];

  constructor(
    private token:TokenService,
    private usuarioService:UsuarioService)
    { }

  ngOnInit(): void {
   this.username= this.token.getUserName();
   if (this.token.getToken()) {
    this.isLogged = true;
    this.isLoginFail = false;
    this.roles = this.token.getAuthorities();
  } 
   this.usuarioService.usuarioPorUsername(this.username).subscribe(usuarioEncontrado=>{
     this.usuario = usuarioEncontrado;
     this.cargarCompras();
   })
  }

  cargarCompras(){
    this.usuarioService.comprasPorUsuario(this.usuario.id_Usuario).subscribe(compras=>{

      for (let i = 0; i < compras.length; i++) {
        if(compras[i].usuario.id_Usuario == this.usuario.id_Usuario){
          this.compras.push(compras[i])
        }
      }
    })
  }

}
