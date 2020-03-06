import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NbLayoutModule, NbSidebarModule, NbCalendarModule, NbInputModule, NbIconModule, NbCardModule, NbSelectModule, NbDatepickerModule, NbButtonModule } from '@nebular/theme';

import { MatChipsModule, MatDialogModule } from '@angular/material';

import { EntryModule } from 'src/entry/entry.module';
import { EventModule } from 'src/event/event.module';
import { TagModule } from 'src/tag/tag.module';
import { AnalyticsModule } from 'src/analytics/analytics.module';

import { DiaryByDateComponent } from './diary-by-date/diary-by-date.component';
import { EventFilterComponent } from './event-filter/event-filter.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [DiaryByDateComponent, EventFilterComponent, DatePickerComponent, AnalyticsComponent],
  imports: [
    CommonModule,
    FormsModule,

    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbButtonModule,
    NbCalendarModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    NbCardModule,
    
    MatDialogModule,
    MatChipsModule,

    EntryModule,
    EventModule,
    TagModule,
    AnalyticsModule,
  ]
})
export class PagesModule { }
