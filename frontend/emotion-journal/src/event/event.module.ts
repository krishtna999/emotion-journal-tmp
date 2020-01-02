import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDisplayComponent } from './event-display/event-display.component';
import { NbCardModule } from '@nebular/theme';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [EventDisplayComponent],
  imports: [
    CommonModule,
    NbCardModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [
    EventDisplayComponent
  ],
})
export class EventModule { }
