import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

interface Movie {
  name: string,
  views: number
}

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
  fontSize: string = '20px'
  color: string = 'red'
  name: string = 'Carlos'
  showDiv: boolean = true
  movies: Movie[] = [
    { name: 'Harry Potter', views: 300 },
    { name: 'Lord of the rings', views: 500 },
    { name: 'Star wars', views: 1500 }
  ]
  movieOfTheYear!: Movie;

  constructor() { }

  ngOnInit(): void {
    this.movieOfTheYear = { ...this.movies[0] }
  }

  onClick() {
    console.log(this.name);
    this.showDiv = !this.showDiv;
  }

}
