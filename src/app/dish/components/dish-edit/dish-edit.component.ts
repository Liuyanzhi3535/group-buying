import { take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Dish } from '../../model/dish.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from '../../dish.service';
import { ClonerService } from 'src/app/core/services/cloner.service';

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.scss'],
})
export class DishEditComponent implements OnInit {
  model;
  mode = 'create';

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private router: Router
    ,
    private clonerSevice: ClonerService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const dishId = paramMap.get('id');
      let dish = new Dish('', '', null, '', '', '');
      if (dishId) {
        this.mode = 'edit';
        this.dishService
          .getDishById(dishId)
          .pipe(take(1))
          .subscribe((dishData) => (dish = dishData));
      }
      this.model = this.clonerSevice.deepClone(dish);
    });
  }

  saveData(dish) {
    if (this.mode === 'create') {
      this.createDish(dish);
    } else {
      this.updateDish(dish);
    }
  }

  createDish(dish) {
    this.dishService.createDish(dish);
    // TODO: 導向到新的 item
    this.router.navigate(['start'], { relativeTo: this.route });
  }

  updateDish(dish) {
    this.dishService.updateDish(dish);
  }

}
