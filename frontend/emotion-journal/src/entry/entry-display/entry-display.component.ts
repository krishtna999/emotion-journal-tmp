import { Component, OnInit } from '@angular/core';

import { EntryService } from '../entry.service';


import * as moment from 'moment';

@Component({
  selector: 'app-entry-display',
  templateUrl: './entry-display.component.html',
  styleUrls: ['./entry-display.component.css']
})
export class EntryDisplayComponent implements OnInit {
  selected_date=new Date();
  constructor(private entryService: EntryService) { }
  json;
  

  // sdate=null;

  getEntryByDate(){
    // console.log(moment(this.selected_date).format('YYYY-MM-DD'));
    this.json = this.entryService.getEntryByDate(moment(this.selected_date).format('YYYY-MM-DD'));
    // this.json.subscribe(data => {
    //   console.log(data[0]);
    // }); 
  }

  ngOnInit() {
    this.getEntryByDate();
  }

}
