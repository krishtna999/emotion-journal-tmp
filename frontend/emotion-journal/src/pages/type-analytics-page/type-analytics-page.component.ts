import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-analytics-page',
  templateUrl: './type-analytics-page.component.html',
  styleUrls: ['./type-analytics-page.component.css']
})
export class TypeAnalyticsPageComponent implements OnInit {
  read_only = true;
  // By default, it is a pie chart
  is_bar_chart = false;

  prim_tag_type = "";

  searchParams: object;
  tags = new Array<object>();
  date_from: Date;
  date_to: Date;

  constructor(
  ) { }

  getFilteredAnalytics() {
    this.searchParams = {
      'primary_tag_type': this.prim_tag_type,
      /* If tags array is edited, then to trigger onChanges in the child component, 
       we are creating a duplicate of tags array everytime.
       Otherwise, 
        there would be no change as the value will always be the pointer (never changes)
      */
      'tags': this.tags.slice(),
      'date_from': this.date_from,
      'date_to': this.date_to
    }
  }

  setDateRange(event) {
    this.date_from = event['date_from'];
    this.date_to = event['date_to'];
  }

  setTags(event) {
    this.tags = event;
  }


  ngOnInit() {
  }

}
