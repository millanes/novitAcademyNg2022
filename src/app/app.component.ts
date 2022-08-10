import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Clase 5 - Routing y AuthGuards';
  isLogged: boolean = false
  constructor(private authService: AuthServiceService, private router: Router) {}

  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated()
  }

  login() {
    this.isLogged = this.authService.login()
  }

  logout() {
    this.isLogged = this.authService.logout()
    this.router.navigate(['Login']);
  }
}
