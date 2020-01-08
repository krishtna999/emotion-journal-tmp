import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { TagDisplayComponent } from './tag-display/tag-display.component';
import { TagCreateComponent } from './tag-create/tag-create.component';




@NgModule({
  declarations: [
    TagDisplayComponent,
    TagCreateComponent,
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [
    TagDisplayComponent,
    TagCreateComponent,
  ]
})
export class TagModule { }
