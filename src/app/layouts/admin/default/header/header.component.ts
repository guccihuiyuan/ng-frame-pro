import {Component} from '@angular/core';
import {CollapsedService} from '@layouts/admin/default/services/collapsed.service';

@Component({
  selector: 'app-layout-admin-default-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class LayoutAdminDefaultHeaderComponent {
  constructor(
    protected collapsedService: CollapsedService
  ) {}
  toggleCollapsedSidebar() {
    this.collapsedService.collapsed = !this.collapsedService.collapsed;
  }
}
