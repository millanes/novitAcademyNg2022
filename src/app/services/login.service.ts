import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = environment.baseURL + 'access/'

  constructor(private http: HttpClient) { }

  login(user:Usuario):Observable<string>{
    return this.http.post(this.baseURL + 'Login', user, { responseType: 'text'});
  }
  
}
