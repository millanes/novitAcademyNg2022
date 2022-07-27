import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tu-componente',
  templateUrl: './tu-componente.component.html',
  styleUrls: ['./tu-componente.component.css']
})
export class TuComponenteComponent implements OnInit {
  title: string = ''

  constructor() {
    let promises = [];
    promises.push(new Promise((resolve, reject) => {
      resolve(
        setTimeout(()=> {
          this.title = 'TuComponente'
        }, 4000)
      )
    }))

    Promise.all(promises).then(result => console.log('eureka'));
  }

  ngOnInit(): void {
  }

  getTitle(): string {
    return this.title
  }

}
