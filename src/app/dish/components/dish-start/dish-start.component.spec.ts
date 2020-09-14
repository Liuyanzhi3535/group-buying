import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishStartComponent } from './dish-start.component';

describe('DishStartComponent', () => {
  let component: DishStartComponent;
  let fixture: ComponentFixture<DishStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
