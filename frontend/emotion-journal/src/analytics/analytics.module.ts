import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { TypeAnalyticsComponent } from './type-analytics.component/type-analytics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [TypeAnalyticsComponent,],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,

    NbLayoutModule,
    NbSidebarModule,

    NgxChartsModule,

  ],
  exports: [TypeAnalyticsComponent,]
})
export class AnalyticsModule { }
