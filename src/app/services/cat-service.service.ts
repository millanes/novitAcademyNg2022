import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable()
export class CatService {

  private baseURL = environment.baseURL + "api/Gatos/";
  constructor(private http: HttpClient,
    private storage: StorageService
    ) { }

  getCats():Observable<any[]>{
    const options = 
    {
      headers: new HttpHeaders().set('token', this.storage.getToken())
    }
    return this.http.get<any[]>(this.baseURL + "Obtener", options);
  }

  giveAway(nombre:string){

    return this.http.delete(this.baseURL + "Regalar/" + nombre, { responseType: 'text', headers: new HttpHeaders().set('token', this.storage.getToken())});
  }

  updateCat(nombreNuevo: string,nombreActual: string){
    const options = 
    {
      headers: new HttpHeaders().set('token', this.storage.getToken()).set('Content-Type', 'text/json'),
      
    }
    return this.http.put(this.baseURL + "Renombrar/" + nombreActual, JSON.stringify(nombreNuevo), options);
  }

  adoptCat(gato: any){
    const options = 
    {
      headers: new HttpHeaders().set('token', this.storage.getToken()),
      
    }
    return this.http.post(this.baseURL + "Adoptar/", gato, options);
  }
} 
