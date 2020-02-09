import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestStepperTwoComponent } from './create-test-stepper-two.component';

describe('CreateTestStepperTwoComponent', () => {
  let component: CreateTestStepperTwoComponent;
  let fixture: ComponentFixture<CreateTestStepperTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTestStepperTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestStepperTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
