import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbLayoutModule,NbSidebarModule} from '@nebular/theme';


import { EntryDisplayComponent } from './entry-display/entry-display.component';

import { SyncService } from '../app/sync.service';
import { EventModule } from '../event/event.module';


@NgModule({
  declarations: [EntryDisplayComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    EventModule,
  ],
  exports:[
    EntryDisplayComponent,

  ],
  providers:[
    SyncService,
  ]
})
export class EntryModule { }
