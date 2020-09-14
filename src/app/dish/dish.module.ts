import { NgModule } from '@angular/core';

import { DishRoutingModule } from './dish-routing.module';
import { SharedModule } from './../shared/shared.module';
import { DishListComponent } from './containers/dish-list/dish-list.component';
import { DishEditComponent } from './components/dish-edit/dish-edit.component';
import { DishStartComponent } from './components/dish-start/dish-start.component';


@NgModule({
  declarations: [DishListComponent, DishEditComponent, DishStartComponent],
  imports: [
    SharedModule,
    DishRoutingModule
  ]
})
export class DishModule { }
