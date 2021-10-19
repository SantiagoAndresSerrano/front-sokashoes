import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
})
export class TableProductComponent implements OnInit {
  productos:any= [];
  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.consultarProductos().subscribe(productos=>{
      this.productos = productos;
    })
  }
  eliminar(producto:any){
    
  }

}
