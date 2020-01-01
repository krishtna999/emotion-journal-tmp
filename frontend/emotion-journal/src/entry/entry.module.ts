import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncService } from '../app/sync.service';
import { EntryDisplayComponent } from './entry-display/entry-display.component';
import { EventModule } from '../event/event.module';


@NgModule({
  declarations: [EntryDisplayComponent],
  imports: [
    CommonModule,
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
