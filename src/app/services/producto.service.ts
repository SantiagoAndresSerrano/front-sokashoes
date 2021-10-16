import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as global from 'global'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  uri = `${global.url}/producto`;
  constructor(private http:HttpClient) { }

  public consultarProductos():Observable<any>{
    return this.http.get<any>(`${this.uri}`);
  }
}
