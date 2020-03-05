import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { EntryService } from '../entry.service';
import { Subscription } from 'rxjs';

import * as moment from 'moment';

@Component({
  selector: 'app-entry-rud',
  templateUrl: './entry-rud.component.html',
  styleUrls: ['./entry-rud.component.css']
})
export class EntryRudComponent implements OnInit {
  subscription: Subscription;
  @Input() selected_date :Date;

  // TODO: Add provision for getting by event_id 
  // Will be used later to access entry through an event (on filter page)
  // @Input() event_id:number;
  
  entry_json;

  constructor(private entryService: EntryService) {
    this.subscription = this.entryService.readRefresh().subscribe(message => {
      this.getEntryByDate();
    });
  }



  getEntryByDate() {
    // const utc_date = this.selected_date.toUTCString();
    this.entry_json = this.entryService.getEntryByDate(moment(this.selected_date).format('YYYY-MM-DD'));
    // this.json.subscribe(data => {
    //   console.log(data);
    // }); 
  }

  ngOnInit() {
    this.getEntryByDate();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getEntryByDate();
  }
}
