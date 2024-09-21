import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParametersAllComponent } from './parameters-all/parameters-all.component';


const routes: Routes = [
  {
    path: '',
    component: ParametersAllComponent,
  },
  
  
  
 
  
  
];

@NgModule({
  declarations: [
    ParametersAllComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ParametersModule { }
