import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  styleUrls: ['pages.component.scss'],
  template: `
      <nb-menu [items]="menu"></nb-menu>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}