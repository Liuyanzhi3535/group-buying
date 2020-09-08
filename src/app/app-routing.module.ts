import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'merchant',
        loadChildren: () =>
          import('./merchant/merchant.module').then(
            (mod) => mod.MerchantModule
          ),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./activity/activity.module').then(
            (mod) => mod.ActivityModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
