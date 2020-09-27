import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ActivityEditComponent } from '../../containers/activity-edit/activity-edit.component';
import { Activity } from '../../models/activity.model';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
})
export class ActivityListComponent implements OnInit {
  @Input() status: 'planning' | 'inProgress' | 'finished';
  @Input() activities$: Observable<Activity[]>;
  @Output() createItme = new EventEmitter();
  @Output() updateItme = new EventEmitter();
  @Output() deleteItme = new EventEmitter();
  displayedColumns: string[] = [
    'id',
    'name',
    // 'duration',
    'merchant',
    'actions',
  ];
  dataSource: MatTableDataSource<Activity>;

  subscriptions = new Subscription();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private activitiesService: ActivitiesService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.activities$.subscribe(
        (activities) => (this.dataSource = new MatTableDataSource(activities))
      )
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEditModal(mode, activityId?) {
    let dialogRef;
    const modalComponent = ActivityEditComponent;
    const modalWith = '500px';
    if (activityId) {
      this.activitiesService
        .getActivityBtId(activityId)
        .pipe(take(1))
        .subscribe((activity) => {
          dialogRef = this.dialog.open(modalComponent, {
            width: modalWith,
            data: { mode, activity },
          });
        });
    } else {
      dialogRef = this.dialog.open(modalComponent, {
        width: modalWith,
        data: { mode },
      });
    }

    dialogRef.afterClosed().subscribe((activity) => {
      if (!activity) return;
      switch (mode) {
        case 'create':
          this.createItme.next(activity);
          break;
        case 'edit':
          this.updateItme.next({ ...activity, id: activityId });
          break;
      }
    });
  }
}
