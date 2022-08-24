import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidenav') SideNav: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openSideNav() {
    if (this.SideNav.opened) {
      this.SideNav.close();
    } else {
      this.SideNav.open();
    }
  }

  goToUsers() {
    this.router.navigateByUrl('/users');
    this.SideNav.close();
  }
  goToAdmins() {
    this.router.navigateByUrl('/admins');
    this.SideNav.close();
  }
}
