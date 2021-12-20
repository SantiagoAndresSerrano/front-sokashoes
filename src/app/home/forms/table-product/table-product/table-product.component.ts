import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
})
export class TableProductComponent implements OnInit {
  productos:any [] = [];
  
  constructor(
    private productoService:ProductoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.productoService.consultarProductos().subscribe(productos=>{
      this.productos = productos;
    })
  }
  editar(id:any){
    this.router.navigateByUrl("/editarProducto/"+id);
  }
  eliminar(id:any){
   this.productoService.deshabilitar(id).subscribe(producto => {
    window.location.reload();
    })
  }
  activar(id:any){
    this.productoService.habilitar(id).subscribe(producto => {
      window.location.reload();
     })
   }

}
