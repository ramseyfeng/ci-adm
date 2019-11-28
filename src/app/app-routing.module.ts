import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataDiscoverComponent } from './data-discover/data-discover.component';
import { EditTypesComponent } from './edit-types/edit-types.component';
import { SyncApisComponent } from './sync-apis/sync-apis.component';
import { DataDiscoverCollectionComponent } from './data-discover-collection/data-discover-collection.component';
import { CoveredCasesComponent } from './covered-cases/covered-cases.component';
import { ApiStatisticsComponent } from './api-statistics/api-statistics.component';
import { OwnerStatisticsComponent } from './owner-statistics/owner-statistics.component';
import { ProtocolAutomationComponent } from './protocol-automation/protocol-automation.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'data-discover', pathMatch: 'full' },
  {
    path: 'data-discover',
    component: DataDiscoverComponent,
    children: [
      { path: '', redirectTo: 'data-discover-home', pathMatch: 'full' },
      {
        path: 'data-discover-home',
        component: DataDiscoverCollectionComponent,
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
  },
  { path: 'protocol-automation', component: ProtocolAutomationComponent },
  { path: 'user-management', component: UserManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
