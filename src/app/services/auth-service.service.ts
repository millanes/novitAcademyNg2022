import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLogged: boolean = false
  constructor() { }

  login(): boolean {
    this.isLogged = true
    return true
  }

  logout(): boolean {
    this.isLogged = false
    return false
  }

  isAuthenticated() {
    return this.isLogged
  }
}
