import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import { DataDiscoverComponent } from './data-discover/data-discover.component';
import { CoveredCasesComponent } from './covered-cases/covered-cases.component';
import { ApiStatisticsComponent } from './api-statistics/api-statistics.component';
import { OwnerStatisticsComponent } from './owner-statistics/owner-statistics.component';
import { SyncApisComponent } from './sync-apis/sync-apis.component';
import { EditTypesComponent } from './edit-types/edit-types.component';
import { ProtocolAutomationComponent } from './protocol-automation/protocol-automation.component';
import { DataDiscoverCollectionComponent } from './data-discover-collection/data-discover-collection.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AgGridModule} from '@ag-grid-community/angular';
import { MockServerComponent } from './mock-server/mock-server.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { GitAgentComponent } from './git-agent/git-agent.component';
import { CreateTenantComponent } from './create-tenant/create-tenant.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DataDiscoverComponent,
    CoveredCasesComponent,
    ApiStatisticsComponent,
    OwnerStatisticsComponent,
    SyncApisComponent,
    EditTypesComponent,
    ProtocolAutomationComponent,
    DataDiscoverCollectionComponent,
    MockServerComponent,
    UserManagementComponent,
    GitAgentComponent,
    CreateTenantComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
