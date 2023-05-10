import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  isVisible: boolean = false;

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
