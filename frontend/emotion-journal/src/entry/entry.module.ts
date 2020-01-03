import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NbLayoutModule, NbDatepickerModule, NbInputModule } from '@nebular/theme';

import { EntryDisplayComponent } from './entry-display/entry-display.component';

import { SyncService } from '../app/sync.service';
import { EventModule } from '../event/event.module';


@NgModule({
  declarations: [EntryDisplayComponent],
  imports: [
    CommonModule,
    FormsModule,

    NbLayoutModule,
    NbDatepickerModule,
    NbInputModule,

    EventModule,
  ],
  exports: [
    EntryDisplayComponent,

  ],
  providers: [
    SyncService,
  ]
})
export class EntryModule { }
