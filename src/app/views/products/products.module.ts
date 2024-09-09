import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: NewComponent,
  },

  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
 
];

@NgModule({
  declarations: [
    NewComponent,
    DetailComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
