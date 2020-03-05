import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EntryModule } from 'src/entry/entry.module';
import { EventModule } from 'src/event/event.module';
import { NbLayoutModule, NbSidebarModule, NbCalendarModule, NbInputModule } from '@nebular/theme';
import { DiaryByDateComponent } from './diary-by-date/diary-by-date.component';



@NgModule({
  declarations: [DiaryByDateComponent],
  imports: [
    CommonModule,
    FormsModule,

    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbCalendarModule,

    EntryModule,
    EventModule,
  ]
})
export class PagesModule { }
