import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dish } from './model/dish.model';
import { map } from 'rxjs/operators';
import { ClonerService } from '../core/services/cloner.service';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  dishes$ = new BehaviorSubject<Dish[]>([
    {
      id: '1',
      name: '特上紅茶',
      description: '無',
      unitPrice: 25,
      category: '',
      image: '',
      customization: '',
    },
    {
      id: '2',
      name: '四季春茶',
      description: '無',
      unitPrice: 30,
      category: '',
      image: '',
      customization: '',
    },
    {
      id: '3',
      name: '綠茶',
      description: '無',
      unitPrice: 25,
      category: '',
      image: '',
      customization: '',
    },
  ]);

  constructor(private clonerService: ClonerService) {}

  fetchDishByMerchant() {}

  getDishes() {
    return this.dishes$.asObservable();
  }

  getDishById(id): Observable<Dish> {
    return this.dishes$.pipe(map((val) => val.find((dish) => dish.id === id)));
  }
  createDish(dish) {
    let updatedDishes = this.clonerService.deepClone(this.dishes$.getValue());
    updatedDishes = [
      ...updatedDishes,
      { ...dish, id: (+new Date() + Math.random()).toString() },
    ];
    console.log(updatedDishes);
    this.dishes$.next(updatedDishes);
  }

  updateDish(dish) {
    const updatedDishes = this.clonerService.deepClone(this.dishes$.getValue());
    const DishIndex = updatedDishes.findIndex(
      (DishData) => DishData.id === dish.id
    );
    updatedDishes[DishIndex] = dish;
    this.dishes$.next(updatedDishes);
  }

  deleteDish(dishId) {
    let updatedDishes = this.clonerService.deepClone(this.dishes$.getValue());
    updatedDishes = updatedDishes.filter((DishData) => DishData.id !== dishId);
    this.dishes$.next(updatedDishes);
  }
}
