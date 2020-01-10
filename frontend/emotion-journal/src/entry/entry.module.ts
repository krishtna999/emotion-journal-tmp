import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NbLayoutModule, NbDatepickerModule, NbInputModule } from '@nebular/theme';

import { EntryRudComponent } from './entry-rud/entry-rud.component';

import { SyncService } from '../app/sync.service';
import { EventModule } from '../event/event.module';


@NgModule({
  declarations: [EntryRudComponent],
  imports: [
    CommonModule,
    FormsModule,

    NbLayoutModule,
    NbDatepickerModule,
    NbInputModule,

    EventModule,
  ],
  exports: [
    EntryRudComponent,

  ],
  providers: [
    SyncService,
  ]
})
export class EntryModule { }
