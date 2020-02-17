import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { NbDialogRef } from '@nebular/theme';

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
  event_id;
  // The above values will be passed from the parent component.

  tagForm = new FormGroup({
    typeControl: new FormControl(),
    nameControl: new FormControl()
  });

  typeControl = this.tagForm.get('typeControl');
  nameControl = this.tagForm.get('nameControl');


  // TODO: add more options
  type_opt: string[] = [];
  name_opt: string[] = ['Happy', 'Sad', 'Placeholder'];
  filtered_type_Options: Observable<string[]>;
  filtered_name_Options: Observable<string[]>;


  // TODO: Figure out a way to transfer window values to calling component without a service. 
  constructor(
    private tagService: TagService,
    private entryService: EntryService,
    public dialogRef: MatDialogRef<TagCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Object
  ) {
    if (this.data != null) {
      this.start_index = this.data['start_index'];
      this.end_index = this.data['end_index'];
      this.event_id = this.data['event_id'];
    }
  }

  ngOnInit() {
    this.tagService.get_autofill_data('type',null).subscribe(
      data=>{
        this.type_opt=data['values'];
        this.filtered_type_Options = this.typeControl.valueChanges
        .pipe(
          startWith(''),
          map(value => {
            const filterValue = value.toLowerCase();
  
            return this.type_opt.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
          })
        );
      }
    );

  }

  focusOutType(){
    /* focusOutType will be called when the "type" field textbox goes out of focus
        If it goes out of focus, it can mean one of 2 things.
        1. The user has clicked on an autofill recommendation
        2. The user has finished entering the input and has moved on to the next field.
        Hence, on both cases the user has decided on a final input.
        
        This means we can go ahead and proceed to get values for the "name" field
    */
    this.tagService.get_autofill_data('name',this.typeControl.value).subscribe(
      data=>{
        this.name_opt=data['values'];
        this.filtered_name_Options = this.nameControl.valueChanges
        .pipe(
          startWith(''),
          map(value => {
            const filterValue = value.toLowerCase();

            return this.name_opt.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
          })
        );

      }
    );
  }


  /*
  Functions were removed in order to achieve sync.

  private _filter_type(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.type_opt.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filter_name(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.name_opt.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  */

  onSubmit() {

    if (this.event_id) {
      var add_tag_observable = this.tagService.add_tag(
        this.event_id,
        this.start_index,
        this.end_index,
        this.typeControl.value,
        this.nameControl.value);
      
      add_tag_observable.subscribe();
      // Asking entry to re-update itself by hitting the backend once more for the latest events.
      this.entryService.refreshEntry();
    }
    var tag = { 'name': this.nameControl.value, 'type': this.typeControl.value };
    this.dialogRef.close(tag);
  }


}










