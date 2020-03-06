import { Component, OnInit, Input, SimpleChanges, Inject } from '@angular/core';

import { EventService } from '../event.service';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {
  @Input() searchParams: object;
  @Input() read_only: boolean;
  events;

  constructor(
    private eventService: EventService,
    @Inject(MAT_DIALOG_DATA) public data: Object
  ) {
    if (data) {
      this.searchParams = data;
      this.read_only = this.searchParams['read_only'];
      this.getFilteredQuery();
    }
  }


  getFilteredQuery() {

    if (this.searchParams) {
      this.eventService.filter_events(
        this.searchParams['tags'],
        this.searchParams['date_from'],
        this.searchParams['date_to']
      ).subscribe(
        data => {
          this.events = data;
        }
      );
    }
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getFilteredQuery();
  }

}
