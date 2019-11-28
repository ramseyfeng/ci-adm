import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiStatisticsComponent } from './api-statistics.component';

describe('ApiStatisticsComponent', () => {
  let component: ApiStatisticsComponent;
  let fixture: ComponentFixture<ApiStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
