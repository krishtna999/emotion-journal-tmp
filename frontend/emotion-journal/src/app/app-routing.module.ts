import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryRudComponent } from '../entry/entry-rud/entry-rud.component';

const routes: Routes = [
  { path: 'diary', component: EntryRudComponent },
  {
    path: '',
    redirectTo: '/diary',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
