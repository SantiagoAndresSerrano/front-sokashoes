import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { CompraService } from 'src/app/services/compra.service';
import * as crypto from "crypto-js";

import * as global from 'global'
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
})
export class CarritoComponent implements OnInit {

  carrito:any = [];
  total!:number;
  color="red";
  uri = global.url_front;
  descripcion= "";

  // Variables Payu ==============================================
  referenciaUnic = this.generarReferencia();
  iva = 0.19;
  moneda = "COP";
  apikey = "yn1jslEAEe809I0BVfHp0VOUIW";
 
  idMercado = "953228";
  idCuenta = "960860";

  email = "genesisd@gmial.com"
  nombrePersona = "Genesis";
  idUsuario = "116";

  url = `http://fee8-186-99-52-63.ngrok.io/pagos/confirmacion`;

  //Variables Payu test

  // test =================================================================
  idCuentaTest = "512321";
  apikeyTest= "4Vj8eK4rloUd272L48hsrarnUA";

  firmaElectronicaTest!:string;
  firmaElectronicaMD5Test!:string;
  
  firmaElectronica!:string;
  firmaElectronicaMD5!:string;
  // test =================================================================

  constructor(
    private carritoService: CarritoService,
    private compraService: CompraService
    ) { }

  ngOnInit(): void {
    
    this.carritoService.consultarCarrito().subscribe(carritos=>{
      this.carrito = carritos;
      this.calcularTotal();
      this.actializarFirma();
    })
  }

  cargarDatos(){
    this.carritoService.cargarCarritos(this.carrito).subscribe(data=>{
    })

    var compra={
      "idCompra":this.referenciaUnic,
      "totalCompra":this.total,
      "usuario":{
        "id_Usuario": 116,
        "username": "Geesis15",
        "email": "ola",
        "password": "gesis",
        "roles": []
    }
    
    }

    this.compraService.guardarCompra(compra).subscribe(data=>{
      console.log(data);
    })
  
  }


  actializarFirma(){
    this.firmaElectronica = `${this.apikey}~${this.idMercado}~${this.referenciaUnic}~${this.total}~${this.moneda}`;
    this.firmaElectronicaMD5 = crypto.MD5(this.firmaElectronica).toString();

    this.firmaElectronicaTest = `${this.apikeyTest}~508029~${this.referenciaUnic}~${this.total}~${this.moneda}`;
    this.firmaElectronicaMD5Test = crypto.MD5(this.firmaElectronicaTest).toString();
    this.generarDescripcion()
    
  }

  generarDescripcion(){
    let desc = "Pago de ";
    for (let i = 0; i < this.carrito.length; i++) {
      if((i+1)==this.carrito.length){
        desc+=` (${this.carrito[i].cantidad}) ${this.carrito[i].producto.modelo}.`;
      }else{
        desc+=` (${this.carrito[i].cantidad}) ${this.carrito[i].producto.modelo},`;
      }
        
    }
    this.descripcion = desc;
  }

  mostrar(id:any, event:any){
    let produc= this.carrito[id-1];
    produc.cantidad = parseInt(event.target.value)
    this.carrito[id-1] = produc;
    this.calcularTotal();
    document.getElementById("subtotal-pagar")!.innerHTML="$"+this.total;
    document.getElementById("total-pagar")!.innerHTML="$"+this.total;
  }

  calcularTotalInd(carrito:any):number{
    let cantidad = parseInt(carrito.cantidad);
    let precio = parseInt(carrito.producto.precio);
    return cantidad*precio;
  }

  generarReferencia():string{
    const fecha = new Date();
    return Math.round((Math.random()*25544))+""+Math.round(fecha.getMilliseconds());
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