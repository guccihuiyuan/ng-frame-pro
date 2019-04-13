import {Component, OnInit} from '@angular/core';
import {ACLService} from '@services/acl/acl.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(
    private aclService: ACLService
  ) {}
  ngOnInit(): void {
    this.aclService.change.subscribe(res => {
      // console.log('change:', this.aclService.acl);
    });
    this.aclService.setFull(false);
    this.aclService.setAbilities(['1', '2', '3', '4']);
    this.aclService.setRole(['role1', 'role2', 'role3', 'role4']);
    this.aclService.set({
      abilities: ['1', '2', '3', '4'],
      roles: ['role1', 'role2', 'role3', 'role4']
    });
    this.aclService.attachAbilities(['5']);
    this.aclService.attachRoles(['role5']);
    this.aclService.removeAbilities(['5']);
    this.aclService.removeRoles(['role5']);

    // console.log('acl:', this.aclService.acl);
    console.log(this.aclService.canAbility(['1']));
    console.log(this.aclService.canAbility(['1', '2']));
    console.log(this.aclService.canAbility(['6']));
    console.log(this.aclService.canAbility('6'));
    console.log(this.aclService.canAbility(['1', '2', '6']));
    console.log(this.aclService.canAbility({
      abilities: ['1', '2', '6'],
      mode: 'oneOf'
    }));
    console.log(this.aclService.can({
      roles: ['role4', 'role5'],
      mode: 'allOf'
    }));
  }
}
