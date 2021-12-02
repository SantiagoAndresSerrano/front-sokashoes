import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
})
export class TableProductComponent implements OnInit {
  productos:any [] = [];
  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.consultarProductos().subscribe(productos=>{
      this.productos = productos;
    })
  }
  eliminar(id:any){
   this.productoService.eliminarProducto(id).subscribe(producto => {
     for (let index = 0; index < this.productos.length; index++) {
      if(this.productos[index].idProducto == id){
        this.productos.slice(index,1)
        window.location.reload();
        break;
      } 
     }
    })
  }

}
