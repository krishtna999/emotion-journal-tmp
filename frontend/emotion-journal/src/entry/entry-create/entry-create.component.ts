import { Component, OnInit, Input } from '@angular/core';

import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry-create',
  templateUrl: './entry-create.component.html',
  styleUrls: ['./entry-create.component.css']
})
export class EntryCreateComponent implements OnInit {
  @Input() selected_date:Date;
  text: string;
  _textAreaStatus = 'basic';

  constructor(private entryService:EntryService) {
  }


  saveEventLocally() {
    this._textAreaStatus = 'danger';
  }

  // When we create a new Entry, we also create a new Event along with it.
  createEntry() {
    this._textAreaStatus = 'basic';
    var create_entry_observable=this.entryService.create_entry(
      this.text,
      this.selected_date
    );

    create_entry_observable.subscribe();
    this.entryService.refreshEntry();
  }

  suppressNewLine(event) {
    event.preventDefault();
  }

  ngOnInit() {
  }
}
