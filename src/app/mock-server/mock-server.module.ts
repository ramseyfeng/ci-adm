import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import {MockServerHomeComponent} from './mock-server-home/mock-server-home.component';
import {GitAgentComponent} from './git-agent/git-agent.component';
import {CreateTenantComponent} from './create-tenant/create-tenant.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MockServerHomeComponent,
    GitAgentComponent,
    CreateTenantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
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
