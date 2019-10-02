import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./search.component";
import { SearchInputComponent } from "./search-input/search-input.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { SearchService } from "./search.service";
import { SearchApiService } from "./search-api.service";

import { SearchState } from "./search.state";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SearchComponent, SearchInputComponent, SearchResultsComponent],
  exports: [SearchComponent],
  providers: [SearchService, SearchApiService, SearchState]
})
export class SearchModule {}
