import {NgModule} from '@angular/core';
import {ACLService} from '@services/acl/acl.service';
import {ACLDirective} from '@services/acl/acl.directive';

@NgModule({
  declarations: [
    ACLDirective
  ],
  providers: [
    ACLService
  ],
  exports: [
    ACLDirective
  ]
})
export class ServicesModule { }
