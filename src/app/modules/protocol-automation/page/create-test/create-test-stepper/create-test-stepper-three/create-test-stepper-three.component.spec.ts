import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestStepperThreeComponent } from './create-test-stepper-three.component';

describe('CreateTestStepperThreeComponent', () => {
  let component: CreateTestStepperThreeComponent;
  let fixture: ComponentFixture<CreateTestStepperThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTestStepperThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestStepperThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
