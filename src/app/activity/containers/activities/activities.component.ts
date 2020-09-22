import { ActivitiesService } from './../../services/activities.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
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
  openModal(){}
}
