import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainComponent } from './main/main.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path:"register", component:RegisterFormComponent},
  {path:"login", component:LoginFormComponent},
  {path:"", component:MainComponent, children:[
    {path:"", pathMatch:"full", component:HomeComponent},
    {path:"upload", component:FileUploadComponent},
    {path:"**", redirectTo:""}
  ]},
  // Need to add 404 not found page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
