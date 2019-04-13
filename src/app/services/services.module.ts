import {NgModule} from '@angular/core';
import {AdminMenuService} from '@services/admin-menu/admin-menu.service';
import {ACLService} from '@services/acl/acl.service';
import {ACLDirective} from '@services/acl/acl.directive';

@NgModule({
  declarations: [
    ACLDirective
  ],
  providers: [
    AdminMenuService,
    ACLService
  ],
  exports: [
    ACLDirective
  ]
})
export class ServicesModule { }
