import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const components = [
  HeaderComponent,
  SidebarComponent,
];

const modules = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ],
  providers: [
  ]
})
export class SharedModule { }