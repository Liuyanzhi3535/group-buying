import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductStartComponent } from './components/product-start/product-start.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductEditComponent,
    ProductStartComponent,
  ],
  imports: [ProductRoutingModule, SharedModule],
})
export class ProductModule {}
