import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { NbWindowRef } from '@nebular/theme';

import { TagService } from '../tag.service';

import { EntryService } from '../../entry/entry.service';

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
  type_opt: string[] = ['Emotion', 'Person', 'Custom'];
  name_opt: string[] = ['Happy', 'Sad', 'Placeholder'];
  filtered_type_Options: Observable<string[]>;
  filtered_name_Options: Observable<string[]>;


  constructor(private tagService:TagService,private entryService:EntryService,protected windowRef: NbWindowRef) { }

  ngOnInit() {
    this.filtered_type_Options = this.typeControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter_type(value))
      );

    this.filtered_name_Options = this.nameControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter_name(value))
      );
    // console.log('passed:',this._selectedText);
  }

  private _filter_type(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.type_opt.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filter_name(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.name_opt.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  onSubmit() {
    console.log('passed:', this.start_index, '-', this.end_index, '\tid:', this.event_id);
    console.log(this.typeControl.value);
    console.log(this.nameControl.value);
    this.tagService.add_tag(this.event_id,this.start_index,this.end_index,this.typeControl.value,this.nameControl.value);
    this.entryService.refreshEntry();
    this.windowRef.close();
  }


}










