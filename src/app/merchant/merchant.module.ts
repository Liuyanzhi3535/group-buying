import { NgModule } from '@angular/core';
import { MerchantListComponent } from './containers/merchant-list/merchant-list.component';
import { SharedModule } from '../shared';
import { MerchantRoutingModule } from './merchant-routing.module';
import { EditMerchantComponent } from './components/edit-merchant/edit-merchant.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MerchantListComponent, EditMerchantComponent],
  imports: [
    MerchantRoutingModule,
    SharedModule,
  ]
})
export class MerchantModule { }
