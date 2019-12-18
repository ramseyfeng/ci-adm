import { NgModule } from '@angular/core';
import { ApiAutomationHomeComponent } from './page/api-automation-home.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AgGridModule} from '@ag-grid-community/angular';
import {DataDiscoverComponent} from './components/data-discover/data-discover.component';
import {SyncApisComponent} from './components/sync-apis/sync-apis.component';
import {OwnerStatisticsComponent} from './components/owner-statistics/owner-statistics.component';
import {ApiStatisticsComponent} from './components/api-statistics/api-statistics.component';
import {CoveredCasesComponent} from './components/covered-cases/covered-cases.component';
import {EditTypesComponent} from './components/edit-types/edit-types.component';

@NgModule({
  declarations: [
    ApiAutomationHomeComponent,
    ApiStatisticsComponent,
    CoveredCasesComponent,
    DataDiscoverComponent,
    EditTypesComponent,
    OwnerStatisticsComponent,
    SyncApisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxChartsModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild([
      {
        path: 'data-discover',
        component: ApiAutomationHomeComponent,
        children: [
          { path: '', redirectTo: 'data-discover-home', pathMatch: 'full' },
          {
            path: 'data-discover-home',
            component: DataDiscoverComponent,
            children: [
              { path: '', redirectTo: 'covered-cases', pathMatch: 'full' },
              { path: 'covered-cases', component: CoveredCasesComponent },
              { path: 'api-statistics', component: ApiStatisticsComponent },
              { path: 'owner-statistics', component: OwnerStatisticsComponent }
            ]
          },
          { path: 'sync-apis', component: SyncApisComponent },
          { path: 'edit-types', component: EditTypesComponent }
        ]
      }
    ])
  ]
})
export class ApiAutomationModule { }
