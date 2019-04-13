import {NgModule} from '@angular/core';
import {ShareModule} from '@share/share.module';

import {LayoutAdminDefaultComponent} from '@layouts/admin/default/default.component';
import {LayoutAdminDefaultHeaderComponent} from '@layouts/admin/default/header/header.component';
import {LayoutAdminDefaultAsideComponent} from '@layouts/admin/default/aside/aside.component';
import {LayoutAdminDefaultFooterComponent} from '@layouts/admin/default/footer/footer.component';


import {CollapsedService} from '@layouts/admin/default/services/collapsed.service';

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
