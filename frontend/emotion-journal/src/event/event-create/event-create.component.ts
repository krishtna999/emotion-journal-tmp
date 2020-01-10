import { Component, OnInit, Input } from '@angular/core';

import { EventService } from '../event.service';

import { EntryService } from '../../entry/entry.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  @Input() selected_date:Date;
  text: string;
  _textAreaStatus = 'basic';

  constructor(private eventService: EventService,private entryService:EntryService) {
  }


  saveLocalEvent() {
    this._textAreaStatus = 'danger';
  }

  // When we create a new Entry, we also create a new Event along with it.
  createEntry() {
    console.log(this.selected_date);
    this._textAreaStatus = 'basic';
    this.eventService.create_event(
      this.text,
      this.selected_date
    );
    this.entryService.refreshEntry();
  }

  suppressNewLine(event) {
    event.preventDefault();
  }

  ngOnInit() {
  }
}
