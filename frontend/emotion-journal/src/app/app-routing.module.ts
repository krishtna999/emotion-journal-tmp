import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryDatePageComponent } from 'src/pages/entry-date-page/entry-date-page.component';
import { EventFilterPageComponent } from 'src/pages/event-filter-page/event-filter-page.component';
import { TypeAnalyticsPageComponent } from 'src/pages/type-analytics-page/type-analytics-page.component';

const routes: Routes = [
  // NOTE: You would also have to add links in pages-menu.ts under pages
  { path: 'diary', component: EntryDatePageComponent },
  { path: 'search', component: EventFilterPageComponent },
  { path: 'analytics', component: TypeAnalyticsPageComponent },
  
  // { path: 'analytics', component:}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
