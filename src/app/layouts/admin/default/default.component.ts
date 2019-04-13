import {Component, Injector} from '@angular/core';
import {BaseComponent} from '@components/base.component';
import {CollapsedService} from './services/collapsed.service';

@Component({
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class LayoutAdminDefaultComponent extends BaseComponent {
  constructor(
    protected injector: Injector,
    private collapsedService: CollapsedService
  ) {
    super(injector);
  }
}
