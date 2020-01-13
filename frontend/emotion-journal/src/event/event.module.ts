import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NbCardModule, NbInputModule, NbIconModule, NbButtonModule } from '@nebular/theme';

import { MatChipsModule } from '@angular/material/chips';
import { HotkeyModule } from 'angular2-hotkeys';


import { EventRudComponent } from './event-rud/event-rud.component';


import { TagModule } from '../tag/tag.module';
import { SyncService } from '../app/sync.service';
import { EntryService } from '../entry/entry.service';

@NgModule({
  declarations: [EventRudComponent],
  imports: [
    CommonModule,
    FormsModule,

    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbButtonModule,
    MatChipsModule,
    HotkeyModule,


    TagModule,
  ],
  exports: [
    EventRudComponent,
  ],
  providers:[
    SyncService,
    EntryService,
    
  ]
})
export class EventModule { }
