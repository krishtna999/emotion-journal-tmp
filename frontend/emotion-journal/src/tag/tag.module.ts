import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { TagDisplayComponent } from './tag-display/tag-display.component';




@NgModule({
  declarations: [
    TagDisplayComponent,
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [
    TagDisplayComponent,
  ]
})
export class TagModule { }
