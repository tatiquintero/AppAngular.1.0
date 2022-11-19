import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModeloIdentificar } from '../modelos/identificar.modelo';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url ='http://localhost:3000';
  constructor(private http: HttpClient) { 


  }

  Identificar(usuario: string, clave: string): Observable<ModeloIdentificar>{
    return this.http.post('${this.url}/identificar-personas',{
      usuario: usuario,
      clave: clave
    },{
      headers: new HttpHeaders({

      })
    })
  
  }

}
