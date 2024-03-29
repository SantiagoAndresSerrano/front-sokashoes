import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as global from 'global'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  uri = `${global.url}/color`;
  constructor(private http:HttpClient) { }

  public consultarColores():Observable<any>{
    return this.http.get<any>(`${this.uri}`);
  }
  consultarColoresPorCantidad(id:any):Observable<any>{
    return this.http.get<any>(`${this.uri}/id/cantidad`);
  }
  public consultarCantidad(id:any):Observable<any>{
    return this.http.get<any>(`${this.uri}/${id}/cantidad`);
  }

}
