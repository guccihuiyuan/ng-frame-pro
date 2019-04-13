import {Component} from '@angular/core';
import {CollapsedService} from '@layouts/admin/default/services/collapsed.service';

@Component({
  selector: 'app-layout-admin-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class LayoutAdminDefaultComponent {
  constructor(
    protected collapsedService: CollapsedService
  ) {}
}
