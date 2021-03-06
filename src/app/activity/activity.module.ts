import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivitiesComponent } from './containers/activities/activities.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityEditComponent } from './containers/activity-edit/activity-edit.component';
import { ActivityTabListComponent } from './containers/activity-tab-list/activity-tab-list.component';
import { OrderInfoComponent } from './components/order-info/order-info.component';

@NgModule({
  declarations: [
    ActivitiesComponent,
    ActivityListComponent,
    ActivityEditComponent,
    ActivityTabListComponent,
    OrderInfoComponent,
  ],
  imports: [ActivityRoutingModule, SharedModule],
})
export class ActivityModule {}
