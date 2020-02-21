import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryRudComponent } from '../entry/entry-rud/entry-rud.component';
import { EventSearchComponent } from '../event/event-search/event-search.component';

const routes: Routes = [
  // NOTE: You would also have to add links in pages-menu.ts under pages
  { path: 'diary', component: EntryRudComponent },
  { path: 'search', component: EventSearchComponent },
  // { path: 'analytics', component:}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
