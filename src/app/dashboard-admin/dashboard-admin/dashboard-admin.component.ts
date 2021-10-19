import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
})
export class DashboardAdminComponent implements OnInit {

  cantidadClientes: any

  constructor(
    private cser: CompraService
  ){}

  ngOnInit(): void {
    this.cser.contarClientesReg().subscribe(cantidad => {
      this.cantidadClientes = cantidad;
    })
  }

}
