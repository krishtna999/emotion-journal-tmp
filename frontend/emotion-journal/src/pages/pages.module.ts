import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NbLayoutModule, NbSidebarModule, NbCalendarModule, NbInputModule, NbIconModule, NbCardModule, NbSelectModule, NbDatepickerModule, NbButtonModule, NbToggleModule } from '@nebular/theme';

import { MatChipsModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

import { EntryModule } from 'src/entry/entry.module';
import { EventModule } from 'src/event/event.module';
import { TagModule } from 'src/tag/tag.module';
import { AnalyticsModule } from 'src/analytics/analytics.module';

import { EntryDatePageComponent } from './entry-date-page/entry-date-page.component';
import { EventFilterPageComponent } from './event-filter-page/event-filter-page.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TypeAnalyticsPageComponent } from './type-analytics-page/type-analytics-page.component';

@NgModule({
  declarations: [EntryDatePageComponent, EventFilterPageComponent, DatePickerComponent, TypeAnalyticsPageComponent],
  imports: [
    CommonModule,
    FormsModule,

    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbButtonModule,
    NbToggleModule,
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
