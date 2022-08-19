import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  showSideNav: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleSideNav(): void {
    this.showSideNav = !this.showSideNav;
    this.subject.next(this.showSideNav);
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
