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


   public consultarCarrito():Observable<any>{
    return this.http.get<any>(`${this.uri}/carrito`);
  }
}
