import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProviderslistComponent } from './providerslist/providerslist.component';
import { ProviderscommandesComponent } from './providerscommandes/providerscommandes.component';
import { ProvidersproductsComponent } from './providersproducts/providersproducts.component';
import { ProviderscomptablesComponent } from './providerscomptables/providerscomptables.component';
import { ProvidersdetailsComponent } from './providersdetails/providersdetails.component';
import { AddProvidersComponent } from './add-providers/add-providers.component';
import { AddAdminComponent } from './add-admin/add-admin.component'



const routes: Routes = [
  {
    path: '',
    component: ProviderslistComponent,
  },
  {
    path: 'commandes',
    component: ProviderscommandesComponent,
  },
  {
    path: 'products',
    component: ProvidersproductsComponent,
  },
  {
    path: 'comptables',
    component: ProviderscomptablesComponent,
  },
  {
    path: 'details',
    component: ProvidersdetailsComponent,
  },
  {
    path: 'add',
    component: AddProvidersComponent,
  },
  {
    path: 'add_admin',
    component: AddAdminComponent,
  },
  
];


@NgModule({
  declarations: [
    ProviderslistComponent,
    ProviderscommandesComponent,
    ProvidersproductsComponent,
    ProviderscomptablesComponent,
    ProvidersdetailsComponent,
    AddProvidersComponent,
    AddAdminComponent,



  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProvidersModule { }



