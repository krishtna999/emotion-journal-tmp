import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiaryByDateComponent } from 'src/pages/diary-by-date/diary-by-date.component';
import { EventFilterComponent } from 'src/pages/event-filter/event-filter.component';
import { AnalyticsComponent } from 'src/pages/analytics/analytics.component';

const routes: Routes = [
  // NOTE: You would also have to add links in pages-menu.ts under pages
  { path: 'diary', component: DiaryByDateComponent },
  { path: 'search', component: EventFilterComponent },
  { path: 'analytics', component: AnalyticsComponent },
  
  // { path: 'analytics', component:}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
