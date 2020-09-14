import { Component, OnInit } from '@angular/core';
import { DishService } from '../../dish.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dish } from '../../model/dish.model';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss'],
})
export class DishListComponent implements OnInit {
  items$: Observable<Dish[]>;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items$ = this.dishService.getDishes();
  }

  deleteDish(dishId) {
    this.dishService.deleteDish(dishId);
    // TODO: 導向起始頁面
    this.router.navigate(['start'], { relativeTo: this.route });
    // });
  }
}
