import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { EntriesComponent } from './entries/entries.component';
import { HttpClientModule } from '@angular/common/http';
import { EntriesListComponent } from './entries/entries-list/entries-list.component';
import { AppComponent } from './app.component';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntriesListComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
