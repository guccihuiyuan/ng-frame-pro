import {Component, Injector} from '@angular/core';
import {APP_CONFIG} from '@configs/app.config';

/**
 * 基础组件类
 */
@Component({
  template: ''
})
export class BaseComponent {
  /**
   * 获取App配置
   */
  APP_CONFIG = APP_CONFIG;

  constructor(
    protected injector: Injector
  ) {}
}
