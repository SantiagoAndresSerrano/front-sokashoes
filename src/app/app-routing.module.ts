import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito/carrito.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './home/dashboard/dashboard/dashboard.component';
import { FormProductComponent } from './home/forms/form-product/form-product/form-product.component';
import { TableProductComponent } from './home/forms/table-product/table-product/table-product.component';
import { InicioComponent } from './home/inicio/inicio/inicio.component';
import { PayuComponent } from './payu/payu/payu.component';
import { ProductosComponent } from './productos/productos/productos.component';
import { AuthLoginComponent } from './security/auth/auth-login/auth-login.component';
import { AuthRegistroComponent } from './security/auth/auth-register/auth-registro.component';

const routes: Routes = [
  {path: 'pagos',component: PayuComponent},
  {path: 'productos',component: ProductosComponent},
  {path: 'carrito',component: CarritoComponent},
  {path: 'inicio',component: InicioComponent},
  {path: 'login',component: AuthLoginComponent},
  {path: 'registro',component: AuthRegistroComponent},
  {path: 'miCuenta',component: DashboardComponent},
  {path: 'admin',component: DashboardAdminComponent},
  {path: 'agregarProducto',component: FormProductComponent},
  {path: '',component: InicioComponent},
  {path: 'listaproductos',component: TableProductComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
