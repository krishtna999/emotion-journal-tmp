import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { EventService } from '../event.service';


@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {
  @Input() searchParams: object;
  @Input() read_only: boolean;
  events;

  constructor(private eventService: EventService) {
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
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.getFilteredQuery();
  }

}
