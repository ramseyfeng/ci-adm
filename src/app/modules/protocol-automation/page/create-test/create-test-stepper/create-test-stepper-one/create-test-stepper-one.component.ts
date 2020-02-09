import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IEnvironment} from '../../../../../../shared/models/environment';
import {EnvironmentService} from '../../../../../../core/services/environment.service';
import {CreateTestService} from '../../services/create-test.service';

@Component({
  selector: 'ct-create-test-stepper-one',
  templateUrl: './create-test-stepper-one.component.html',
  styleUrls: ['./create-test-stepper-one.component.scss']
})
export class CreateTestStepperOneComponent implements OnInit {
  firstFormGroup: FormGroup;
  selectedEnv: string;
  envs: IEnvironment[];

  envCtrl = new FormControl(['', Validators.required]);

  constructor(private fb: FormBuilder, private environmentService: EnvironmentService, private createTestSvc: CreateTestService) {
    this.firstFormGroup = this.fb.group({
      envCtrl: this.envCtrl,
      tenantCtrl: ['', Validators.required],
      projectIdCtrl: ['', Validators.required]
    });
  }

  ngOnInit() {

    this.environmentService.getEnvironments().subscribe({
      next: (envs: IEnvironment[]) => {
        this.envs = envs;
      }
    });

    this.firstFormGroup.valueChanges.subscribe(value => {
      this.createTestSvc.updateData({
        envName: value.envCtrl,
        tenant: value.tenantCtrl,
        projectId: value.projectIdCtrl
      });
    });

  }

  selectEnv({value}) {
    this.selectedEnv = value;
  }

}
