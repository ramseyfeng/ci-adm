import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAutomationHomeComponent } from './api-automation-home.component';

describe('ApiAutomationHomeComponent', () => {
  let component: ApiAutomationHomeComponent;
  let fixture: ComponentFixture<ApiAutomationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiAutomationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAutomationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
