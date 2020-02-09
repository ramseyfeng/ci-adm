import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, ValidatorFn} from '@angular/forms';
import {CreateTestService} from '../../services/create-test.service';

@Component({
  selector: 'ct-create-test-stepper-four',
  templateUrl: './create-test-stepper-four.component.html',
  styleUrls: ['./create-test-stepper-four.component.scss']
})
export class CreateTestStepperFourComponent implements OnInit {
  forthFormGroup: any;

  constructor(private fb: FormBuilder, private createTestSvc: CreateTestService) {
    this.forthFormGroup = this.fb.group({
      regions: new FormArray([], minSelectedCheckboxes(1))
    });
  }

  ngOnInit() {
    this.createTestSvc.initRegions().subscribe(
      data => console.log(data)
    );
  }

}

function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : {required: true};
  };

  return validator;
}
