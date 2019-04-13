import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShareModule} from '@share/share.module';
import {MainComponent} from '@routes/admin/main/main.component';

const ROUTE_COMPONENTS = [
  MainComponent
];
const COMPONENTS = [
];

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'system', loadChildren: './system/system.module#SystemModule' }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ...ROUTE_COMPONENTS,
    ...COMPONENTS
  ]
})
export class AdminModule {}
