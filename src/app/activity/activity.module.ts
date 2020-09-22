import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivitiesComponent } from './containers/activities/activities.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';


@NgModule({
  declarations: [ActivitiesComponent, ActivityListComponent],
  imports: [
    ActivityRoutingModule,
    SharedModule,
  ]
})
export class ActivityModule { }
