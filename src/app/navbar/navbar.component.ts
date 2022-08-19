import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() onAddMeal: EventEmitter<boolean> = new EventEmitter();
  sideNavOpen: boolean = false;
  uiSubscription: Subscription;
  events: string[] = [];

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.uiSubscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.sideNavOpen = value));
  }

  openSideNav() {
    this.uiService.toggleSideNav();
  }
}
