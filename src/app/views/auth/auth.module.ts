import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'sign_in',
    component: SignInComponent,
  }
];


@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
