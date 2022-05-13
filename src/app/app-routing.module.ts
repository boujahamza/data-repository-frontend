import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"login", component:LoginFormComponent},
  {path:"home", component:MainComponent},
  {path:"", redirectTo:"/home",pathMatch: 'full'},
  // Need to add 404 not found page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
