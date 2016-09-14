import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibraryModule, AppComponent } from 'aot-library';

@NgModule({
  imports: [ BrowserModule, LibraryModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }