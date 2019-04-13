import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '@share/share.module';
import {DashboardDefaultComponent} from '@routes/admin/dashboard/default/default.component';

/**
 * 路由组件
 */
const ROUTE_COMPONENTS = [
  DashboardDefaultComponent
];

/**
 * 普通组件
 */
const COMPONENTS = [
];

/**
 * 路由配置
 */
const routes: Routes = [
  { path: '', component: DashboardDefaultComponent }
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
export class DashboardModule {}
