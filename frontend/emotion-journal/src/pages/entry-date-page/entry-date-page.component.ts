import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-date-page',
  templateUrl: './entry-date-page.component.html',
  styleUrls: ['./entry-date-page.component.css']
})
export class EntryDatePageComponent implements OnInit {
  selected_date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
