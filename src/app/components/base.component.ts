import {Component, Injector} from '@angular/core';

/**
 * 基础组件类
 */
@Component({
  template: ''
})
export class BaseComponent {
  constructor(
    protected injector: Injector
  ) {}
}
