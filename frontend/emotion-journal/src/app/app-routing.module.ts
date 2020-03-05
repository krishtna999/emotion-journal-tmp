import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventSearchComponent } from '../event/event-search/event-search.component';
import { TagAnalyticsComponent } from 'src/analytics/tag-analytics/tag-analytics.component';
import { DiaryByDateComponent } from 'src/pages/diary-by-date/diary-by-date.component';

const routes: Routes = [
  // NOTE: You would also have to add links in pages-menu.ts under pages
  { path: 'diary', component: DiaryByDateComponent },
  { path: 'search', component: EventSearchComponent },
  { path: 'analytics', component: TagAnalyticsComponent },
  
  // { path: 'analytics', component:}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
