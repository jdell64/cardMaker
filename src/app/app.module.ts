import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlayingCardComponent} from './playing-card/playing-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UiLibraryModule} from './ui-library/ui-library.module';
import {TsvReaderService} from './tsv-reader.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayingCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiLibraryModule
  ],
  providers: [TsvReaderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
