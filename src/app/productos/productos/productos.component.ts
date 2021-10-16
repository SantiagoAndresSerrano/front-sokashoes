import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { ProductoService } from 'src/app/services/producto.service';
import { TallaService } from 'src/app/services/talla.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent implements OnInit {
  
  productos:any = [];
  tallas:any = [];
  colores:any = [];

  constructor(
    private pser: ProductoService,
    private tser: TallaService,
    private cser: ColorService
  ){}

  ngOnInit(): void {
    this.pser.consultarProductos().subscribe( productos => {
      this.productos = productos;
    });
    this.tser.consultarTallas().subscribe( tallas => {
      this.tallas = tallas;
    });
    this.cser.consultarColores().subscribe( colores => {
      this.colores = colores;
    });
  }

}
