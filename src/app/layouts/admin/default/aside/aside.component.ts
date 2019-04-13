import {Component, OnInit} from '@angular/core';
import {CollapsedService} from '@layouts/admin/default/services/collapsed.service';
import {Router} from '@angular/router';
import {AdminMenuService} from '@services/admin-menu/admin-menu.service';
import {Observable} from 'rxjs';
import {AdminMenu} from '@services/admin-menu/admin-menu.interface';

@Component({
  selector: 'app-layout-admin-default-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.less']
})
export class LayoutAdminDefaultAsideComponent implements OnInit {
  // 菜单观察者
  menus$: Observable<AdminMenu[]> = null;

  constructor(
    private router: Router,
    protected collapsedService: CollapsedService,
    private adminMenuService: AdminMenuService
  ) {}

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
    // 监听菜单的变化
    this.menus$ = this.adminMenuService.change;
  }
}
