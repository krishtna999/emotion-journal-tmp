import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { 
  NbCardModule, 
  NbInputModule, 
  NbIconModule, 
  NbButtonModule,
  NbRadioModule, 
  NbDatepickerModule,
  NbLayoutModule,
  
} from '@nebular/theme';

import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { HotkeyModule } from 'angular2-hotkeys';


import { EventRudComponent } from './event-rud/event-rud.component';
import { EventSearchComponent } from './event-search/event-search.component';


import { TagModule } from '../tag/tag.module';
import { SyncService } from '../app/sync.service';
import { EntryService } from '../entry/entry.service';
import { TagCreateComponent } from 'src/tag/tag-create/tag-create.component';

@NgModule({
  declarations: [EventRudComponent, EventSearchComponent, ],
  imports: [
    CommonModule,
    FormsModule,

    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbButtonModule,
    NbRadioModule,
    NbDatepickerModule,
    MatChipsModule,
    MatDialogModule,
    HotkeyModule,

    TagModule,
  ],
  exports: [
    EventRudComponent,
    EventSearchComponent,
  ],
  providers:[
    SyncService,
    EntryService,
    
  ],

  entryComponents:[
    TagCreateComponent
  ]
})
export class EventModule { }
