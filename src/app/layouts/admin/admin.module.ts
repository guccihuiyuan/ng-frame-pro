import {NgModule} from '@angular/core';
import {ShareModule} from '@share/share.module';
import {LayoutAdminDefaultModule} from '@layouts/admin/default/default.module';

@NgModule({
  imports: [
    ShareModule,
    LayoutAdminDefaultModule
  ]
})
export class LayoutAdminModule { }
