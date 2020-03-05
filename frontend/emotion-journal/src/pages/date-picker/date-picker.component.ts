import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const options = [
  { value: 'PAST_WEEK', label: 'Past Week' },
  { value: 'PAST_MONTH', label: 'Past Month' },
  { value: 'PAST_YEAR', label: 'Past Year' },
  { value: 'ALL_DATES', label: 'All Dates' },
  { value: 'CUSTOM_RANGE', label: 'Custom Range' },
];


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Output() dateRangeChange = new EventEmitter<object>();
  
  date_from:Date;
  date_to:Date;

  date_option = 'ALL_DATES';
  range_options = options;

  constructor() { }

  isRangeDate() {
    return this.date_option == 'CUSTOM_RANGE';
  }

  setDates(event){
    this.date_option=event;
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
    this.dateRangeChange.emit({'date_from':this.date_from,'date_to':this.date_to});
  }

  dateFromChange(event){
    this.date_from=event;
    this.dateRangeChange.emit({'date_from':this.date_from,'date_to':this.date_to});

  }

  dateToChange(event){
    this.date_to=event;
    this.dateRangeChange.emit({'date_from':this.date_from,'date_to':this.date_to});

  }

  ngOnInit() {
  }


}
