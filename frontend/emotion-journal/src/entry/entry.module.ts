import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NbLayoutModule, NbDatepickerModule, NbInputModule, NbCardModule } from '@nebular/theme';

import { EntryRudComponent } from './entry-rud/entry-rud.component';
import { EntryCreateComponent } from './entry-create/entry-create.component';

import { SyncService } from '../app/sync.service';
import { EventModule } from '../event/event.module';


@NgModule({
  declarations: [EntryRudComponent, EntryCreateComponent],
  imports: [
    CommonModule,
    FormsModule,

    NbLayoutModule,
    NbDatepickerModule,
    NbInputModule,
    NbCardModule,

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
