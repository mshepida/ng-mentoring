import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public showLoader = new Subject<boolean>();

  public show(): void {
    this.showLoader.next(true);
  }

  public hide(): void {
    this.showLoader.next(false);
  }


  constructor() { }
}
