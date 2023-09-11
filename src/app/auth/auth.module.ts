import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import SharedModule from "../shared.module";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AuthServiceService } from './auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  }
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes),HttpClientModule,CommonModule,FormsModule,ReactiveFormsModule],
  declarations: [LoginComponent, SignUpComponent],
  providers:[AuthServiceService],
  exports: [RouterModule]
})
export default class AuthModule { }