import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito/carrito.component';
import { InicioComponent } from './home/inicio/inicio/inicio.component';
import { PayuComponent } from './payu/payu/payu.component';
import { ProductosComponent } from './productos/productos/productos.component';
import { AuthLoginComponent } from './security/auth/auth-login/auth-login.component';

const routes: Routes = [
  {path: 'pagos',component: PayuComponent},
  {path: 'productos',component: ProductosComponent},
  {path: 'carrito',component: CarritoComponent},
  {path: 'inicio',component: InicioComponent},
  {path: 'login',component: AuthLoginComponent},
  {path: '',component: InicioComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
