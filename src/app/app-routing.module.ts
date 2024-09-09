import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'orders',
    loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'providers',
    loadChildren: () => import('./views/providers/providers.module').then(m => m.ProvidersModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'accountant',
    loadChildren: () => import('./views/accountant/accountant.module').then(m => m.AccountantModule)
  },
  {
    path: 'parameter',
    loadChildren: () => import('./views/parameters/parameters.module').then(m => m.ParametersModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
