import { Injectable } from '@angular/core';
import * as global from 'global'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  uri = global.url;

  constructor(private http:HttpClient) {

   }

   public cargarCarritos(carritos:any):Observable<any>{
    return this.http.patch<any>(`${this.uri}/carrito/grupo`, carritos);
  }
   public consultarCarrito():Observable<any>{
    return this.http.get<any>(`${this.uri}/carrito`);
  }
}
