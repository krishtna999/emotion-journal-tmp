import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  styleUrls: ['pages.component.scss'],
  template: `
      <span *ngFor="let item of menu"><button routerLink="{{item.link}}" mat-button >{{item.title}}</button></span>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}