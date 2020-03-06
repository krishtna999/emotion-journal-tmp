import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-analytics-page',
  templateUrl: './type-analytics-page.component.html',
  styleUrls: ['./type-analytics-page.component.css']
})
export class TypeAnalyticsPageComponent implements OnInit {
  read_only = true;
  
  primary_type:object;

  searchParams: object;
  tags = new Array<object>();
  date_from: Date;
  date_to: Date;

  constructor() { }
  
  getFilteredAnalytics() {
    this.searchParams = {
      'primary_type':this.primary_type,
      'tags': this.tags,
      'date_from': this.date_from,
      'date_to': this.date_to
    }
  }
  
  setPrimaryTag(event){
    this.primary_type=event;
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
