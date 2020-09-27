import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityEditComponent } from './containers/activity-edit/activity-edit.component';
import { ActivitiesComponent } from './containers/activities/activities.component';
import { ActivityTabListComponent } from './containers/activity-tab-list/activity-tab-list.component';
import { OrderInfoComponent } from './components/order-info/order-info.component';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesComponent,
    data: { moduleName: '團購活動' },
    children: [
      { path: 'list', component: ActivityTabListComponent },
      {
        path: 'order-info/:id',
        data: { moduleName: '訂購清單' },
        component: OrderInfoComponent,
      },
      // { path: 'new', component: ActivityEditComponent },
      // { path: 'edit/:id', component: ActivityEditComponent },
      { path: '**', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
