import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShareModule} from '@share/share.module';
import {LayoutAdminDefaultComponent} from '@layouts/admin/default/default.component';

/**
 * 路由组件
 */
const ROUTE_COMPONENTS = [
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
  // 首页重定向
  { path: '', pathMatch: 'full', redirectTo: 'admin'},
  // 后台
  {
    path: 'admin',
    component: LayoutAdminDefaultComponent,
    children: [
      { path: '', loadChildren: './admin/admin.module#AdminModule'}
    ]
  },
  // 其他
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [
    ...ROUTE_COMPONENTS,
    ...COMPONENTS
  ]
})
export class RoutesModule {}
