import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-activity-tab-list',
  templateUrl: './activity-tab-list.component.html',
  styleUrls: ['./activity-tab-list.component.scss'],
})
export class ActivityTabListComponent implements OnInit {
  planningActs$;
  inProgressActs$;
  finishedActs$;

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.planningActs$ = this.activitiesService.getActivitiesByStatus(
      'planning'
    );
    this.inProgressActs$ = this.activitiesService.getActivitiesByStatus(
      'inProgress'
    );
    this.finishedActs$ = this.activitiesService.getActivitiesByStatus(
      'finished'
    );
  }

  createActivity(activity) {
    this.activitiesService.createActivity(activity);
  }

  updateActivity(activity) {
    this.activitiesService.updateActivity(activity);
  }

  deleteActivity(activityId) {
    this.activitiesService.deleteActivity(activityId);
  }
}
