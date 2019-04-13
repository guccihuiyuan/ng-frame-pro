import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class CollapsedService {
  private _notify$ = new Subject<boolean>();

  private _collapsed = false;

  get collapsed(): boolean {
    return this._collapsed;
  }

  set collapsed(v: boolean) {
    this._collapsed = v;
    this._notify$.next(v);
  }
}
