import {NgModule} from '@angular/core';
import {ShareModule} from '@share/share.module';
import {LayoutAdminModule} from '@layouts/admin/admin.module';

@NgModule({
  imports: [
    ShareModule,
    LayoutAdminModule
  ]
})
export class LayoutModule { }
