import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '@share/share.module';
import {UserComponent} from '@routes/admin/system/user/user.component';
import {RoleComponent} from '@routes/admin/system/role/role.component';

/**
 * 路由组件
 */
const ROUTE_COMPONENTS = [
  UserComponent,
  RoleComponent
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
  { path: 'user', component: UserComponent },
  { path: 'role', component: RoleComponent }
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
export class SystemModule {}
