import { Component, OnInit } from '@angular/core';

import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry-display',
  templateUrl: './entry-display.component.html',
  styleUrls: ['./entry-display.component.css']
})
export class EntryDisplayComponent implements OnInit {

  constructor(private entryService: EntryService) { }
  json;

  ngOnInit() {
    this.json = this.entryService.getEntryByDate('2019-12-28');
    this.json.subscribe(data => {
      console.log(data[0]);
    });
  }

}
