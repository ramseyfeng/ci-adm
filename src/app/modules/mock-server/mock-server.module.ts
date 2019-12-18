import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateTenantComponent} from './components/create-tenant/create-tenant.component';
import {GitAgentComponent} from './components/git-agent/git-agent.component';
import {MockServerHomeComponent} from './page/mock-server-home.component';
import { ActiveAgentsComponent } from './components/active-agents/active-agents.component';
import {AgGridModule} from '@ag-grid-community/angular';
import { ActionCellRenderComponent } from './components/action-cell-render/action-cell-render.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    MockServerHomeComponent,
    GitAgentComponent,
    CreateTenantComponent,
    ActiveAgentsComponent,
    ActionCellRenderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([ActionCellRenderComponent]),
    RouterModule.forChild([
      {
        path: 'mock-server',
        component: MockServerHomeComponent,
        children: [
          { path: '', redirectTo: 'git-agent', pathMatch: 'full' },
          { path: 'git-agent', component: GitAgentComponent },
          { path: 'create-tenant', component: CreateTenantComponent }
        ]
      }
    ])
  ]
})
export class MockServerModule {}
