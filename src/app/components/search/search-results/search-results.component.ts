import { Component, OnInit } from "@angular/core";
import { SearchService } from "../search.service";
import { SearchRes } from "../search-models";
import { Subject } from "rxjs";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.css"]
})
export class SearchResultsComponent implements OnInit {
  public searchResults$: Subject<SearchRes>;
  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchResults$ = this.searchService.getResults();
  }

  public nextPage(): void {
    this.searchService.setNextPage();
  }
}
