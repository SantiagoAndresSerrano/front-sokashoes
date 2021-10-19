import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayuComponent } from './payu/payu/payu.component';
import { HeaderComponent } from './home/header/header/header.component';
import { FooterComponent } from './home/footer/footer/footer.component';
import { ProductosComponent } from './productos/productos/productos.component';
import { CarritoComponent } from './carrito/carrito/carrito.component';
import { InicioComponent } from './home/inicio/inicio/inicio.component';
import { TallaService } from './services/talla.service';
import { ColorService } from './services/color.service';
import {MarcaService} from './services/marca.service';
import { AuthLoginComponent } from './security/auth/auth-login/auth-login.component';
import { AuthRegistroComponent } from './security/auth/auth-register/auth-registro.component';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from './services/usuario.service';
import { TransaccionService } from './services/transaccion.service';
import { PaqInterceptorService } from './security/interceptors/paq-interceptor.service';

import { interceptorProvider } from './security/interceptors/paq-interceptor.service';
import { DashboardComponent } from './home/dashboard/dashboard/dashboard.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin/dashboard-admin.component';
import { XdComponent } from './prueba/xd/xd.component';
@NgModule({
  declarations: [
    AppComponent,
    PayuComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    CarritoComponent,
    InicioComponent,
    AuthLoginComponent,
    AuthRegistroComponent,
    DashboardComponent,
    DashboardAdminComponent,
    XdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    TallaService, 
    ColorService,
    UsuarioService,
    TransaccionService,
    PaqInterceptorService,
    interceptorProvider,
    MarcaService
    ],
  bootstrap: [AppComponent]

})
export class AppModule { }
