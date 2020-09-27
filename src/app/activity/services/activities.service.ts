import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClonerService } from 'src/app/core/services/cloner.service';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  activities$ = new BehaviorSubject<Activity[]>([
    {
      id: '1',
      name: 'test',
      description: '',
      status: 'planning',
      initTime: 1600611937575,
      endTime: 1600615937575,
      merchantsInfo: [
        {
          id: '1',
          name: 'Coco',
          logo:
            'https://tryworks.jp/wp/wp-content/uploads/2020/03/7875d2b8042b9311ba2065016a1afe67.jpg',
        },
      ],
      orders: [
        {
          participant: { id: '12', name: 'Amy' },
          items: [
            {
              itemId: '123',
              name: '特上紅茶',
              description: '無',
              unitPrice: 25,
              category: '',
              image: '',
              customization: '',
              count: 2,
            },
          ],
          isPaid: false,
          totalPrice: 50,
        },
      ],
    },
    {
      id: '4',
      name: 'test4',
      description: '',
      status: 'planning',
      initTime: 1600611937575,
      endTime: 1600615937575,
      merchantsInfo: [
        {
          id: '1',
          name: 'Coco',
          logo:
            'https://tryworks.jp/wp/wp-content/uploads/2020/03/7875d2b8042b9311ba2065016a1afe67.jpg',
        },
      ],
      orders: [
        {
          participant: { id: '12', name: 'Amy' },
          items: [
            {
              itemId: '123',
              name: '特上紅茶',
              description: '無',
              unitPrice: 25,
              category: '',
              image: '',
              customization: '',
              count: 2,
            },
          ],
          isPaid: false,
          totalPrice: 50,
        },
      ],
    },
    {
      id: '2',
      name: 'test2',
      description: '',
      status: 'inProgress',
      initTime: 1600611937575,
      endTime: 1600615937575,
      merchantsInfo: [
        {
          id: '1',
          name: 'Coco',
          logo:
            'https://tryworks.jp/wp/wp-content/uploads/2020/03/7875d2b8042b9311ba2065016a1afe67.jpg',
        },
      ],
      orders: [
        {
          participant: { id: '12', name: 'Amy' },
          items: [
            {
              itemId: '123',
              name: '特上紅茶',
              description: '無',
              unitPrice: 25,
              category: '',
              image: '',
              customization: '',
              count: 2,
            },
          ],
          isPaid: false,
          totalPrice: 50,
        },
      ],
    },
    {
      id: '3',
      name: 'test3',
      description: '',
      status: 'finished',
      initTime: 1600611937575,
      endTime: 1600615937575,
      merchantsInfo: [
        {
          id: '1',
          name: 'Coco',
          logo:
            'https://tryworks.jp/wp/wp-content/uploads/2020/03/7875d2b8042b9311ba2065016a1afe67.jpg',
        },
      ],
      orders: [
        {
          participant: { id: '12', name: 'Amy' },
          items: [
            {
              itemId: '123',
              name: '特上紅茶',
              description: '無',
              unitPrice: 25,
              category: '',
              image: '',
              customization: '',
              count: 2,
            },
          ],
          isPaid: false,
          totalPrice: 50,
        },
      ],
    },
  ]);
  constructor(private clonerService: ClonerService) {}

  fetchActivities() {}

  getActivitiesByStatus(status?: 'planning' | 'inProgress' | 'finished') {
    return this.activities$.pipe(
      map((activities) => {
        if (!status) {
          return activities;
        }
        return activities.filter((activity) => activity.status === status);
      })
    );
  }

  getActivityBtId(id) {
    return this.activities$.pipe(
      map((val) => val.find((activity) => activity.id === id))
    );
  }

  createActivity(activity) {
    let updatedpActivities = this.clonerService.deepClone(
      this.activities$.getValue()
    );
    updatedpActivities = [
      ...updatedpActivities,
      { ...activity, id: (+new Date() + Math.random()).toString() },
    ];
    this.activities$.next(updatedpActivities);
  }

  updateActivity(activity) {
    const updatedpActivities = this.clonerService.deepClone(
      this.activities$.getValue()
    );
    const activityIndex = updatedpActivities.findIndex(
      (activityData) => activityData.id === activity.id
    );
    updatedpActivities[activityIndex] = activity;
    this.activities$.next(updatedpActivities);
  }

  deleteActivity(activityId) {
    let updatedpActivities = this.clonerService.deepClone(
      this.activities$.getValue()
    );
    updatedpActivities = updatedpActivities.filter(
      (activityData) => activityData.id !== activityId
    );
    this.activities$.next(updatedpActivities);
  }
}
