import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TagService } from '../tag.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tag-type-autocomplete',
  templateUrl: './tag-type-autocomplete.component.html',
  styleUrls: ['./tag-type-autocomplete.component.css']
})
export class TagTypeAutocompleteComponent implements OnInit {
  @Input() tagType:string;
  
  @Output() tagTypeChange = new EventEmitter<string>();

  focusOutType(){
    /* focusOutType will be called when the "type" field textbox goes out of focus
        If it goes out of focus, it can mean one of 2 things.
        1. The user has clicked on an autofill recommendation
        2. The user has finished entering the input and has moved on to the next field.
        Hence, on both cases the user has decided on a final input.
        
        This means we can go ahead and proceed to get values for the "name" field
    */
   this.tagType=this.typeControl.value;
   console.log('out',this.tagType);
   this.tagTypeChange.emit(this.tagType);
  }
  typeControl=new FormControl();
  

  type_opt: string[] = [];
  filtered_type_Options: Observable<string[]>;


  constructor(
    private tagService: TagService,
    ) { }

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

}
