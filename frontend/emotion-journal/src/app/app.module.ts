import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NbLayoutModule, NbThemeModule, NbSidebarModule, NbDatepickerModule, NbThemeService, NbWindowModule, NbToastrModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HotkeyModule } from 'angular2-hotkeys';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';

import { EntryModule } from '../entry/entry.module';
import { TagModule } from '../tag/tag.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TagCreateComponent } from '../tag/tag-create/tag-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    HotkeyModule.forRoot(),
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbEvaIconsModule,
    NbLayoutModule,
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbMenuModule.forRoot(),

    EntryModule,
    TagModule,

  ],
  exports: [

  ],
  providers: [NbThemeService,],
  bootstrap: [AppComponent],

  entryComponents: [
    TagCreateComponent,
  ]
})
export class AppModule { }
