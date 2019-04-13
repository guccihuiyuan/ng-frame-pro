import {Component, Injector} from '@angular/core';
import {BaseComponent} from '@components/base.component';
import {CollapsedService} from '../services/collapsed.service';

@Component({
  selector: 'app-layout-admin-default-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class LayoutAdminDefaultHeaderComponent extends BaseComponent {
  constructor(
    protected injector: Injector,
    protected collapsedService: CollapsedService
  ) {
    super(injector);
  }
  toggleCollapsedSidebar() {
    this.collapsedService.collapsed = !this.collapsedService.collapsed;
  }
}
