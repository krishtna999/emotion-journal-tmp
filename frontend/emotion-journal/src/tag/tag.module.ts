import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NbButtonModule } from '@nebular/theme';


import { TagRudComponent } from './tag-rud/tag-rud.component';
import { TagCreateComponent } from './tag-create/tag-create.component';

import { SyncService } from '../app/sync.service';
import { EntryService } from '../entry/entry.service';


@NgModule({
  declarations: [
    TagRudComponent,
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
    TagRudComponent,
    TagCreateComponent,
  ],

  providers: [
    SyncService,
    EntryService,
  ],
})
export class TagModule { }
