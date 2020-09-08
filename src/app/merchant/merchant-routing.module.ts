import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantListComponent } from './containers/merchant-list/merchant-list.component';

const routes: Routes = [{ path: '', component: MerchantListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantRoutingModule {}
