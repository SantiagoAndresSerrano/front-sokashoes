import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/interfaces/producto.interface';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
})
export class CarritoComponent implements OnInit {

  carrito:any = [];
  total!:number;
  
  constructor(
    private carritoService: CarritoService
    ) { }

  ngOnInit(): void {
    this.carritoService.consultarCarrito().subscribe(carritos=>{
      this.carrito = carritos;
      this.calcularTotal();
    })
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
