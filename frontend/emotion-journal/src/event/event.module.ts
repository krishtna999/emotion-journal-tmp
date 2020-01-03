import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule } from '@nebular/theme';
import { MatChipsModule } from '@angular/material/chips';

import { EventDisplayComponent } from './event-display/event-display.component';

import { TagModule } from '../tag/tag.module';

@NgModule({
  declarations: [EventDisplayComponent],
  imports: [
    CommonModule,
    NbCardModule,
    MatChipsModule,
    TagModule,
  ],
  exports: [
    EventDisplayComponent
  ],
})
export class EventModule { }
