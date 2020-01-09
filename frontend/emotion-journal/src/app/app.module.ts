import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NbLayoutModule, NbThemeModule, NbSidebarModule, NbDatepickerModule, NbThemeService,NbWindowModule,NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EntryModule } from '../entry/entry.module';
import { TagModule } from '../tag/tag.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TagCreateComponent } from '../tag/tag-create/tag-create.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbEvaIconsModule,
    NbLayoutModule,
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),

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
