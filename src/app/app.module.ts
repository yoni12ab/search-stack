import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SearchModule } from "./components/search/search.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { MatSnackBarModule } from "@angular/material/snack-bar";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SearchModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSnackBarModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
