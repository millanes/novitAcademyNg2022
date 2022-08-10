import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token = undefined
  title = 'Clase 4 - Servicios';

  modifyUser(token: any) {
    console.log('Llamaron al evento con la info', token);
    this.token = token;
  }
}
