import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  constructor() {}
}
