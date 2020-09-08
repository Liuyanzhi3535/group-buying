import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivitiesComponent } from './containers/activities/activities.component';


@NgModule({
  declarations: [ActivitiesComponent],
  imports: [
    ActivityRoutingModule,
    SharedModule,
  ]
})
export class ActivityModule { }
