import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestStepperOneComponent } from './create-test-stepper-one.component';

describe('CreateTestStepperOneComponent', () => {
  let component: CreateTestStepperOneComponent;
  let fixture: ComponentFixture<CreateTestStepperOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTestStepperOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestStepperOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
