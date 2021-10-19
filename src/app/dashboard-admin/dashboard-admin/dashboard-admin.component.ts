import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';
import { ProductoService } from 'src/app/services/producto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
})
export class DashboardAdminComponent implements OnInit {

  cantidadClientes: any
  cantidadProductos: any
  cantidadVentas: any

  constructor(
    private user: UsuarioService,
    private pser: ProductoService,
    private cser: CompraService
  ){}

  ngOnInit(): void {
    this.user.contarClientesReg().subscribe(cantidad => {
      this.cantidadClientes = cantidad;
    })
    this.pser.contarProductos().subscribe(producto => {
      this.cantidadProductos = producto;
    })
    this.cser.valorVentas().subscribe(venta => {
      this.cantidadVentas = venta;
    })
  }

}
