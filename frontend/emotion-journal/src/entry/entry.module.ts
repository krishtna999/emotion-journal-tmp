import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NbLayoutModule, NbInputModule, NbCardModule, NbSidebarModule, NbCalendarModule } from '@nebular/theme';

import { EntryRudComponent } from './entry-rud/entry-rud.component';
import { EntryCreateComponent } from './entry-create/entry-create.component';

import { SyncService } from '../app/sync.service';
import { EventModule } from '../event/event.module';
import { TagCreateComponent } from 'src/tag/tag-create/tag-create.component';


@NgModule({
  declarations: [EntryRudComponent, EntryCreateComponent],
  imports: [
    CommonModule,
    FormsModule,

    NbLayoutModule,
    NbInputModule,
    NbCardModule,
    NbCalendarModule,
    EventModule,
  ],
  exports: [
    EntryRudComponent,

  ],
  providers: [
    SyncService,
  ],
  entryComponents:[
    TagCreateComponent,
  ]
})
export class EntryModule { }
