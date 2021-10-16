import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as global from 'global'
@Injectable({
  providedIn: 'root'
})
export class CompraService {

  uri = global.url;

  constructor(private http:HttpClient){}

  public consultarCompras():Observable<any>{
    return this.http.get<any>(`${this.uri}/compra`);
  }
}
