import { NgModule } from '@angular/core';
import { ProtocolAutomationHomeComponent } from './page/protocol-automation-home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateTestComponent } from './page/create-test/create-test.component';
import { CreateTestStepperComponent } from './page/create-test/create-test-stepper/create-test-stepper.component';
import { CoreModule } from '../../core/core.module';
import { CreateTestStepperOneComponent } from './page/create-test/create-test-stepper/create-test-stepper-one/create-test-stepper-one.component';
import { CreateTestStepperTwoComponent } from './page/create-test/create-test-stepper/create-test-stepper-two/create-test-stepper-two.component';
import { CreateTestStepperThreeComponent } from './page/create-test/create-test-stepper/create-test-stepper-three/create-test-stepper-three.component';
import { CreateTestStepperFourComponent } from './page/create-test/create-test-stepper/create-test-stepper-four/create-test-stepper-four.component';

@NgModule({
  declarations: [
    ProtocolAutomationHomeComponent,
    CreateTestComponent,
    CreateTestStepperComponent,
    CreateTestStepperOneComponent,
    CreateTestStepperTwoComponent,
    CreateTestStepperThreeComponent,
    CreateTestStepperFourComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule.forChild([
      {
        path: 'protocol-automation',
        component: ProtocolAutomationHomeComponent,
        children: [{ path: 'create-test', component: CreateTestComponent }]
      }
    ])
  ]
})
export class ProtocolAutomationModule {}
