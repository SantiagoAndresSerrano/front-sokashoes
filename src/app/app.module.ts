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

@NgModule({
  declarations: [
    AppComponent,
    PayuComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    CarritoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [TallaService, ColorService],
  bootstrap: [AppComponent]

})
export class AppModule { }
