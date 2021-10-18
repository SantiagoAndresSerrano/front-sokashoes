import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ColorService } from 'src/app/services/color.service';
import { MarcaService } from 'src/app/services/marca.service';
import { ProductoService } from 'src/app/services/producto.service';
import { TallaService } from 'src/app/services/talla.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent implements OnInit {
  
  productos:any = [];
  tallas:any = [];
  colores:any = [];
  marcas:any = [];
  cantidadMarcas: any = [];
  usuario:any;
  username = "";

  constructor(
    private pser: ProductoService,
    private caser: CarritoService,
    private tser: TallaService,
    private cser: ColorService,
    private mser: MarcaService,
    private token:TokenService,
    private usuarioService:UsuarioService

  ){}


  ngOnInit(): void {

    this.username= this.token.getUserName();
    this.usuarioService.usuarioPorUsername(this.username).subscribe(usuarioEncontrado=>{
      this.usuario = usuarioEncontrado;
    });

    this.pser.consultarProductos().subscribe( productos => {
      this.productos = productos;
    });
    this.tser.consultarTallas().subscribe( tallas => {
      this.tallas = tallas;
    });
    this.cser.consultarColores().subscribe( colores => {
      this.colores = colores;
    });
    this.mser.consultarMarcas().subscribe( marcas => {
      this.marcas = marcas;
      this.cantidadPorMarcas();
      console.log(this.cantidadMarcas)
    });
  }
    cantidadPorMarcas(){
      for (let i = 0; i < this.marcas.length; i++) {
        this.mser.consultarCantidad(this.marcas[i].idMarca).subscribe( cantidad => {
          this.cantidadMarcas[i] = cantidad;
        })
        
      }
    
  }



  agregarACarrito(producto:any){

    var carrito = {
    "cantidad": 1,
    "producto":producto,
    "usuario":this.usuario
    }
    this.caser.guardarCarrito(carrito).subscribe(data=>{console.log(data);})
    
  }
}
