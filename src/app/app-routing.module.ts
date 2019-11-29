import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtocolAutomationComponent } from './protocol-automation/protocol-automation.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'data-discover', pathMatch: 'full' },
  { path: 'protocol-automation', component: ProtocolAutomationComponent },
  { path: 'user-management', component: UserManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
