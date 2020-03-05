import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.css']
})
export class EventFilterComponent implements OnInit {
  read_only = true;
  searchParams: object;

  tags = new Array<object>();
  date_from: Date;
  date_to: Date;

  constructor() { }

  getFilteredQuery() {
    this.searchParams = {
      'tags': this.tags,
      'date_from': this.date_from,
      'date_to': this.date_to
    }
  }

  setDateRange(event) {
    this.date_from = event['date_from'];
    this.date_to = event['date_to'];
  }

  setTags(event){
    this.tags=event;
  }
  ngOnInit() {
  }

}
