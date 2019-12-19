import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {IEnvironment} from '../../../../../shared/models/environment';
import {EnvironmentService} from '../../../../../core/services/environment.service';
import {ProtocolService} from '../../../../../core/services/protocol.service';
import {MatHorizontalStepper} from '@angular/material';
import {IProtocol} from '../../../../../shared/models/protocol';

@Component({
  selector: 'ct-create-test-stepper',
  templateUrl: './create-test-stepper.component.html',
  styleUrls: ['./create-test-stepper.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class CreateTestStepperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  selectedEnv: string;
  private envs: IEnvironment[];
  progressing = false;
  protocols: IProtocol[] = [];

  constructor(private fb: FormBuilder, private environmentService: EnvironmentService, private protocolSvc: ProtocolService) {}

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      envCtrl: ['', Validators.required],
      tenantCtrl: ['', Validators.required],
      projectIdCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      protocolCtrl: ['', Validators.required]
    });


    this.environmentService.getEnvironments().subscribe({
      next: (envs: IEnvironment[]) => {
        this.envs = envs;
      }
    });
  }

  selectEnv({value}) {
    this.selectedEnv = value;
  }

  f1Next(stepper: MatHorizontalStepper) {
    this.progressing = true;
    this.protocolSvc.getProtocols().subscribe(protocols => {
      this.protocols = protocols;
      stepper.next();
      this.progressing = false;
    });
  }
}
