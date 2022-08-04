import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clase 3 - Formularios, @Inputs y @Outputs';
  loggedUser = { name: 'Nicolás Micó', email: 'nicolas@mico.com' };

  modifyUser(user: any) {
    console.log('Llamaron al evento con la info', user);
    this.loggedUser = user;
  }
}
