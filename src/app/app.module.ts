import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SearchModule } from './components/search/search.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports:      [ BrowserModule, FormsModule, SearchModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
