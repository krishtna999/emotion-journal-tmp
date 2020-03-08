import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TagService } from '../tag.service';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tag-name-autocomplete',
  templateUrl: './tag-name-autocomplete.component.html',
  styleUrls: ['./tag-name-autocomplete.component.css']
})
export class TagNameAutocompleteComponent implements OnInit {
  private _tagType: string;
  @Input()
  set tagType(value: string) {
    this._tagType = value;
    this.tagService.get_autofill_data('name', this._tagType).subscribe(
      data => {
        this.name_opt = data['values'];
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

  @Input() tagName: string;

  @Output() tagNameChange = new EventEmitter<string>();

  tagNameValue: string;
  nameControl = new FormControl();


  name_opt: string[] = [];
  filtered_name_Options: Observable<string[]>;

  constructor(private tagService: TagService, ) { }

  ngOnInit() {
    if (this.tagName) {
      this.nameControl.setValue(this.tagName);
    }
    
    this.nameControl.valueChanges.subscribe(value => {
      this.tagName = value;
      this.tagNameChange.emit(this.tagName);
    }
    );

  }

}
