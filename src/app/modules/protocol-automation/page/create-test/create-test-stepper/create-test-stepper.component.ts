import {Component, OnInit} from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'ct-create-test-stepper',
  templateUrl: './create-test-stepper.component.html',
  styleUrls: ['./create-test-stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false}
    }
  ]
})
export class CreateTestStepperComponent implements OnInit {
  constructor(
  ) {
  }

  ngOnInit() {
  }
}
