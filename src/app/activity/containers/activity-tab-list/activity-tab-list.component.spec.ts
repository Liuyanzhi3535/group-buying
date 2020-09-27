import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTabListComponent } from './activity-tab-list.component';

describe('ActivityTabListComponent', () => {
  let component: ActivityTabListComponent;
  let fixture: ComponentFixture<ActivityTabListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityTabListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
