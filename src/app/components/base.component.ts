import {Component, Injector} from '@angular/core';

@Component({
  template: ''
})
export class BaseComponent {
  constructor(
    protected injector: Injector
  ) {}
}
