import { NgModule } from '@angular/core';
import { ProtocolAutomationHomeComponent } from './protocol-automation-home/protocol-automation-home.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ProtocolAutomationHomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'protocol-automation', component: ProtocolAutomationHomeComponent }
    ])
  ]
})
export class ProtocolAutomationModule { }
