import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './containers/activities/activities.component';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesComponent,
    data: { moduleName: '團購活動' },

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
