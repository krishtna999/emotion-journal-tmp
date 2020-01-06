import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NbCardModule, NbInputModule, NbIconModule, NbButtonModule } from '@nebular/theme';

import { MatChipsModule } from '@angular/material/chips';


import { EventDisplayComponent } from './event-display/event-display.component';

import { TagModule } from '../tag/tag.module';

@NgModule({
  declarations: [EventDisplayComponent],
  imports: [
    CommonModule,
    FormsModule,

    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbButtonModule,
    MatChipsModule,


    TagModule,
  ],
  exports: [
    EventDisplayComponent
  ],
})
export class EventModule { }
