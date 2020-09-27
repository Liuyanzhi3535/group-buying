import { OrderInfo } from './../../models/orderInfo.model';
import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss'],
})
export class OrderInfoComponent implements OnInit {
  activityName: string;
  orders$: Observable<OrderInfo[]>;
  allTotalPrice$: Observable<number>;
  constructor(
    private activitiesService: ActivitiesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.activitiesService
      .getActivityBtId(id)
      .pipe(take(1))
      .subscribe((value) => (this.activityName = value.name));

    this.orders$ = this.activitiesService.getOrderInfoByActivityId(id);

    this.allTotalPrice$ = this.orders$.pipe(
      map((val: OrderInfo[]) =>
        val.map((order) => order.totalPrice).reduce((a, b) => a + b)
      )
    );
  }
}
