import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  NbLayoutModule,
  NbThemeModule,
  NbSidebarModule,
  NbDatepickerModule,
  NbThemeService,
  NbToastrModule,
  NbIconConfig,
  NbGlobalPhysicalPosition,
} from '@nebular/theme';

import { MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HotkeyModule } from 'angular2-hotkeys';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';

import { EntryModule } from '../entry/entry.module';
import { TagModule } from '../tag/tag.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const iconConfig: NbIconConfig = { icon: 'text-outline', pack: 'eva' };

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
    NbToastrModule.forRoot({
      icon:iconConfig,
      preventDuplicates:true,
      position:NbGlobalPhysicalPosition.BOTTOM_LEFT,
    }),
    
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,

    EntryModule,
    TagModule,

  ],
  exports: [

  ],
  providers: [NbThemeService,],
  bootstrap: [AppComponent],
})


export class AppModule { }
