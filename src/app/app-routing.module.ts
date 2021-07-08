import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienComponent } from './auth/bien/bien.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"success",
    component: BienComponent
  },
  {
    path:"**",
    redirectTo:"login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
