import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { MenuRoutingModule } from './menu-routing.module';


@NgModule({
  declarations: [],
  imports: [
    MenuRoutingModule,
    SharedModule
  ]
})
export class MenuModule { }
