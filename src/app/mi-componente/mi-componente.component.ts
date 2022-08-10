import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProfile(): void {
    //this.router.navigate(['Profile'], { queryParams: { uid: 2, name: 'Elsa' }})
    this.router.navigate(['Profile']);
  }
}
