import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { AppGuardService } from './services/app-guard.service';
import { LoginComponent } from './login/login.component';

const rutas: Routes = [{
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: MiComponenteComponent
  }, {
    path: 'About',
    component: AboutComponent
  }, {
    path: 'About/:someone',
    component: AboutComponent
  }, {
    path: 'Profile',
    component: ProfileComponent,
    canActivate: [AppGuardService]
  }, {
    path: 'Login',
    component: LoginComponent
  }, 
  {
    path: '**',
    component: NotFound404Component
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
