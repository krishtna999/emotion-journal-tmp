import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';

import { MatDialog } from '@angular/material/dialog';
import { TagCreateComponent } from 'src/tag/tag-create/tag-create.component';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {
  tags = new Array<object>();

  date_from: Date;
  date_to: Date;
  date_option = 'ALL_DATES';

  options = [
    { value: 'ALL_DATES', label: 'All Dates', checked: true },
    { value: 'SINGLE_DATE', label: 'Single Date' },
    { value: 'RANGE_DATE', label: 'Date Range' },
  ];


  constructor(private eventService: EventService, private dialog: MatDialog) {

  }

  isAllDates() {
    return this.date_option == 'ALL_DATES';
  }

  isOneDate() {
    return this.date_option == 'SINGLE_DATE';
  }

  isRangeDate() {
    return this.date_option == 'RANGE_DATE';
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
    console.log(this.tags, this.date_from, this.date_to);
    /* TODO: From/To Date option should be checked again here ! 
    As otherwise, if the user alternates between options, the value doesn't change.
    Hence checking with null really isn't a good idea.
    */
  }

  ngOnInit() {
  }

}
