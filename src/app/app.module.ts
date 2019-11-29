import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AgGridModule} from '@ag-grid-community/angular';
import { UserManagementComponent } from './user-management/user-management.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MockServerModule} from './mock-server/mock-server.module';
import {ApiAutomationModule} from './api-automation/api-automation.module';
import {ProtocolAutomationComponent} from './protocol-automation/protocol-automation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProtocolAutomationComponent,
    UserManagementComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxChartsModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    ApiAutomationModule,
    MockServerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
