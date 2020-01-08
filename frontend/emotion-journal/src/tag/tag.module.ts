import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NbButtonModule } from '@nebular/theme';


import { TagDisplayComponent } from './tag-display/tag-display.component';
import { TagCreateComponent } from './tag-create/tag-create.component';




@NgModule({
  declarations: [
    TagDisplayComponent,
    TagCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    NbButtonModule,

  ],
  exports: [
    TagDisplayComponent,
    TagCreateComponent,
  ]
})
export class TagModule { }
