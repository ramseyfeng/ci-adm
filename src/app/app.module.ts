import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ApiAutomationModule} from './modules/api-automation/api-automation.module';
import {MaterialModule} from './modules/material/material.module';
import {MockServerModule} from './modules/mock-server/mock-server.module';
import {UserManagementModule} from './modules/user-management/user-management.module';
import {ProtocolAutomationModule} from './modules/protocol-automation/protocol-automation.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule,
    FlexLayoutModule,
    ApiAutomationModule,
    MockServerModule,
    ProtocolAutomationModule,
    UserManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
