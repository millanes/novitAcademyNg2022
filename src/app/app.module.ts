import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { TuComponenteComponent } from './tu-componente/tu-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    TuComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
