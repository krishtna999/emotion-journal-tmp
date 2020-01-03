import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagDisplayComponent } from './tag-display/tag-display.component';



@NgModule({
  declarations: [
    TagDisplayComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TagDisplayComponent,
  ]
})
export class TagModule { }
