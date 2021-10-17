import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  total!:number;
  carrito:any = [];
  username = "";
  usuario!:any;
  cantidadTotal=0;

  constructor(
    private token:TokenService,
    private usuarioService:UsuarioService

    ) { }

  ngOnInit(): void {

    this.username= this.token.getUserName();

   this.usuarioService.usuarioPorUsername(this.username).subscribe(usuarioEncontrado=>{
     this.usuario = usuarioEncontrado;

     this.usuarioService.carritoDeUsuario(this.usuario.id_Usuario).subscribe(carritos=>{
      this.carrito = carritos;
      this.calcularTotal();
      this.calcularCantidad();
    })
   })

    

  }

  calcularCantidad(){
    for (let i = 0; i < this.carrito.length; i++) {
      this.cantidadTotal+=this.carrito[i].cantidad;      
    }
    console.log(this.cantidadTotal);
  }
  calcularTotal(){
    this.total = 0;
    let totalCompra = 0;
    let carritoCompra = this.carrito;
    for (let i = 0; i < carritoCompra.length; i++) {
        let producto = carritoCompra[i];
        totalCompra+=(producto.cantidad*producto.producto.precio);
    }
    this.total = totalCompra;
  }

}
