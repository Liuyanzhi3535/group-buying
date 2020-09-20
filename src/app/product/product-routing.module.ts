import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductStartComponent } from './components/product-start/product-start.component';
import { ProductListComponent } from './containers/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    data: { moduleName: '項目清單' },
    children: [
      { path: 'start', component: ProductStartComponent },
      { path: 'new', component: ProductEditComponent },
      { path: 'edit/:id', component: ProductEditComponent },
      { path: '**', redirectTo: 'start' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
