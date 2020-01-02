import { Component, OnInit } from '@angular/core';

import { EntryService } from '../entry.service';

import { EventDisplayComponent } from '../../event/event-display/event-display.component';

@Component({
  selector: 'app-entry-display',
  templateUrl: './entry-display.component.html',
  styleUrls: ['./entry-display.component.css']
})
export class EntryDisplayComponent implements OnInit {
  selected_date='2019-12-28';
  constructor(private entryService: EntryService) { }
  json;

  ngOnInit() {
    this.json = this.entryService.getEntryByDate(this.selected_date);
    this.json.subscribe(data => {
      console.log(data[0]);
    });
  }

}
