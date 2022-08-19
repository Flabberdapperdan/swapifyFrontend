import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidenav') SideNav: any;

  constructor() {}

  ngOnInit(): void {}

  openSideNav() {
    if (this.SideNav.opened) {
      this.SideNav.close();
    } else {
      this.SideNav.open();
    }
  }
}
