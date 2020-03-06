import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { TypeAnalyticsComponent } from './type-analytics.component/type-analytics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { EventSearchComponent } from 'src/event/event-search/event-search.component';


@NgModule({
  declarations: [TypeAnalyticsComponent,],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,

    NbLayoutModule,
    NbSidebarModule,

    MatDialogModule,
    NgxChartsModule,

  ],
  exports: [TypeAnalyticsComponent,],
  entryComponents: [
    EventSearchComponent,
  ]
})
export class AnalyticsModule { }
