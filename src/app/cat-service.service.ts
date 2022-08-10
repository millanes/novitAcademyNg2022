import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable()
export class CatService {

  private baseURL = environment.baseURL + "api/Gatos/";
  constructor(private http: HttpClient,
    private storage: StorageService
    ) { }

  getCats(){
    const options = 
    {
      headers: new HttpHeaders().set('token', this.storage.getToken())
    }
    return this.http.get(this.baseURL + "Obtener", options);
  }

  giveAway(nombre:string){

    return this.http.delete(this.baseURL + "Regalar/" + nombre, { responseType: 'text', headers: new HttpHeaders().set('token', this.storage.getToken())});
  }

  updateCat(nombreNuevo: string,nombreActual: string){
    const options = 
    {
      headers: new HttpHeaders().set('token', this.storage.getToken())
    }
    return this.http.put(this.baseURL + "Renombrar/" + nombreActual,  nombreNuevo, options);
  }
} 
