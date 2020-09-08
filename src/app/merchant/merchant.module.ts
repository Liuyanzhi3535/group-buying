import { NgModule } from '@angular/core';
import { MerchantListComponent } from './containers/merchant-list/merchant-list.component';
import { SharedModule } from '../shared';
import { MerchantRoutingModule } from './merchant-routing.module';

@NgModule({
  declarations: [MerchantListComponent],
  imports: [
    MerchantRoutingModule,
    SharedModule
  ]
})
export class MerchantModule { }
