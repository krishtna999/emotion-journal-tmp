import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { TagService } from '../tag.service';

import { EntryService } from '../../entry/entry.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


// Refer Angular Material's AutoComplete documentation for more.

@Component({
  selector: 'app-tag-create',
  templateUrl: './tag-create.component.html',
  styleUrls: ['./tag-create.component.css']
})
export class TagCreateComponent implements OnInit {
  start_index;
  end_index;
  event;
  // The above values will be passed from the parent component.

  tagType:string;
  tagName:string;

  constructor(
    private tagService: TagService,
    private entryService: EntryService,
    public dialogRef: MatDialogRef<TagCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Object
  ) {
    if (this.data != null) {
      this.start_index = this.data['start_index'];
      this.end_index = this.data['end_index'];
      this.event = this.data['event'];
    }
  }

  ngOnInit() {
  }

  isDisabled(){
    return this.tagType==null || this.tagName==null 
      || 
      this.tagType.length<1 || this.tagName.length<1;
  }

  onSubmit() {
    if (this.event['id']) {
      var add_tag_observable = this.tagService.add_tag(
        this.event,
        this.start_index,
        this.end_index,
        this.tagType,
        this.tagName);
      
      add_tag_observable.subscribe();
      // Asking entry to re-update itself by hitting the backend once more for the latest events.
      this.entryService.refreshEntry();
    }
    var tag = { 'name': this.tagName, 'type': this.tagType };
    this.dialogRef.close(tag);
  }


}










