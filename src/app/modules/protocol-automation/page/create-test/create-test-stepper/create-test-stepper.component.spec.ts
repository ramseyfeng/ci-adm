import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestStepperComponent } from './create-test-stepper.component';

describe('CreateTestStepperComponent', () => {
  let component: CreateTestStepperComponent;
  let fixture: ComponentFixture<CreateTestStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTestStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
