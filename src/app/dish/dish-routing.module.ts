import { DishEditComponent } from './components/dish-edit/dish-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishListComponent } from './containers/dish-list/dish-list.component';
import { DishStartComponent } from './components/dish-start/dish-start.component';

const routes: Routes = [
  {
    path: '',
    component: DishListComponent,
    children: [
      { path: 'start', component: DishStartComponent },
      { path: 'new', component: DishEditComponent },
      { path: 'edit/:id', component: DishEditComponent },
      { path: '**', redirectTo: 'start' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DishRoutingModule {}
