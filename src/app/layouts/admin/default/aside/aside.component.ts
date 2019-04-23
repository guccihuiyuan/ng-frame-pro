import {Component, Injector, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BaseComponent} from '@components/base.component';
import {CollapsedService} from '../services/collapsed.service';
import {AdminMenuService} from '@ang-kit/theme';

// import {AdminMenuService} from '@services/admin-menu/admin-menu.service';

@Component({
  selector: 'app-layout-admin-default-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.less']
})
export class LayoutAdminDefaultAsideComponent extends BaseComponent implements OnInit {
  constructor(
    protected injector: Injector,
    private router: Router,
    protected collapsedService: CollapsedService,
    private adminMenuService: AdminMenuService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.adminMenuService.add(
      [
        {
          title: '仪表盘',
          icon: 'dashboard',
          open: false,
          selected: false,
          disabled: false,
          children: [
            {
              title: '默认页',
              selected: false,
              disabled: false,
              link: '/admin/dashboard'
            }
          ]
        },
        {
          title: '系统管理',
          icon: 'setting',
          open: false,
          selected: false,
          disabled: false,
          children: [
            {
              title: '用户管理',
              selected: false,
              disabled: false,
              link: '/admin/system/user'
            },
            {
              title: '角色管理',
              selected: false,
              disabled: false,
              link: '/admin/system/role'
            }
          ]
        }
      ]
    );
  }
}
