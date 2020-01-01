import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncService } from '../app/sync.service';
import { EntryDisplayComponent } from './entry-display/entry-display.component';



@NgModule({
  declarations: [EntryDisplayComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    EntryDisplayComponent,

  ],
  providers:[
    SyncService,
  ]
})
export class EntryModule { }
