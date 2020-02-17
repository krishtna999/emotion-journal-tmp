import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';

import { MatDialog } from '@angular/material/dialog';
import { TagCreateComponent } from 'src/tag/tag-create/tag-create.component';



const options = [
  { value: 'PAST_WEEK', label: 'Past Week' },
  { value: 'PAST_MONTH', label: 'Past Month' },
  { value: 'PAST_YEAR', label: 'Past Year' },
  { value: 'ALL_DATES', label: 'All Dates' },
  { value: 'CUSTOM_RANGE', label: 'Custom Range' },
];

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {
  tags = new Array<object>();
  events;
  date_from: Date;
  date_to: Date;
  date_option = 'ALL_DATES';


  range_options = options;

  constructor(private eventService: EventService, private dialog: MatDialog) {

  }

  isRangeDate() {
    return this.date_option == 'CUSTOM_RANGE';
  }

  addTagFilter() {
    const dialogRef = this.dialog.open(TagCreateComponent);
    dialogRef.afterClosed()
      .subscribe(
        data => {
          if (data != null)
            this.tags.push(Object(data))
        }
      );

  }
  getFilteredQuery() {
    if (this.date_option == 'ALL_DATES') {

    }
    if (this.date_option != 'CUSTOM_RANGE') {
      this.date_from = new Date();
      this.date_to = new Date();
    }
    switch (this.date_option) {
      case 'ALL_DATES':
        this.date_from = null;
        this.date_to = null;
        break;
      case 'PAST_WEEK':
        this.date_to.setDate(this.date_from.getDate() - 7);
        break;
      case 'PAST_MONTH':
        this.date_to.setDate(this.date_from.getDate() - 30);
        break;
      case 'PAST_YEAR':
        this.date_to.setDate(this.date_from.getDate() - 365);
        break;
    }

    // console.log(this.tags);
    this.eventService.filter_events(
      this.tags,
      this.date_from,
      this.date_to
    ).subscribe(
      data=>{
        this.events=data;
      }
    );
    /* TODO: From/To Date option should be checked again here ! 
    As otherwise, if the user alternates between options, the value doesn't change.
    Hence checking with null really isn't a good idea.
    */
  }

  removeEventHandler($event: number) {
    console.log($event);
    this.tags.splice($event,1);
  }

  ngOnInit() {
  }

}
