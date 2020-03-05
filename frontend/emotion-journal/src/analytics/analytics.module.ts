import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { TagModule } from 'src/tag/tag.module';




import { TagAnalyticsComponent } from './tag-analytics/tag-analytics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [TagAnalyticsComponent,],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    
    NbLayoutModule,
    NbSidebarModule,
    
    NgxChartsModule,



    TagModule,

  ]
})
export class AnalyticsModule { }
