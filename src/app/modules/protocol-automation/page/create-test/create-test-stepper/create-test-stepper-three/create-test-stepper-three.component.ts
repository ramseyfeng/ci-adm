import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {FeaturesService} from '../../../../../../core/services/features.service';
import {Observable} from 'rxjs';
import {IFeature} from '../../../../../../shared/models/feature';

@Component({
  selector: 'ct-create-test-stepper-three',
  templateUrl: './create-test-stepper-three.component.html',
  styleUrls: ['./create-test-stepper-three.component.scss']
})
export class CreateTestStepperThreeComponent implements OnInit {
  thirdFormGroup: FormGroup;
  featuresData: IFeature[];

  // featuresByProtocol$: Observable<IFeature[]>;

  constructor(private fb: FormBuilder, private featureSvc: FeaturesService) {
    this.thirdFormGroup = this.fb.group({
      features: new FormArray([], minSelectedCheckboxes(1))
    });
  }

  ngOnInit() {
    this.featureSvc.getFeatures('6').subscribe(features => {
      this.featuresData = features;
      features.forEach((obj, index) => {
        (this.thirdFormGroup.controls.features as FormArray).push(new FormControl(index === 0));
      });
    });
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
