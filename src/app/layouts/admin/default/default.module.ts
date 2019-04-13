import {NgModule} from '@angular/core';
import {ShareModule} from '@share/share.module';

import {LayoutAdminDefaultComponent} from './default.component';
import {LayoutAdminDefaultHeaderComponent} from './header/header.component';
import {LayoutAdminDefaultAsideComponent} from './aside/aside.component';
import {LayoutAdminDefaultFooterComponent} from './footer/footer.component';

// 服务类
import {CollapsedService} from './services/collapsed.service';

const LAYOUTS = [
  LayoutAdminDefaultComponent
];
const COMPONENTS = [
  LayoutAdminDefaultHeaderComponent,
  LayoutAdminDefaultAsideComponent,
  LayoutAdminDefaultFooterComponent
];

@NgModule({
  imports: [ShareModule],
  providers: [
    CollapsedService
  ],
  declarations: [
    ...LAYOUTS,
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutAdminDefaultModule { }
