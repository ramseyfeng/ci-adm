import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestStepperFourComponent } from './create-test-stepper-four.component';

describe('CreateTestStepperFourComponent', () => {
  let component: CreateTestStepperFourComponent;
  let fixture: ComponentFixture<CreateTestStepperFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTestStepperFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestStepperFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
