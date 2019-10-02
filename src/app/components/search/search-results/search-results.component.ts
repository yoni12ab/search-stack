import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SearchService } from "../search.service";
import { SearchRes, SearchItem } from "../search-models";
import { Subject } from "rxjs";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.css"]
})
export class SearchResultsComponent implements OnInit {
  @Input() public searchResults$: Subject<SearchRes>;
  @Output() nextPage = new EventEmitter<void>();
  @Output() itemSelected = new EventEmitter<SearchItem>();
  constructor() {}

  ngOnInit() {}

  public click(): void {
    this.nextPage.emit();
  }

  public selectItem(item: SearchItem): void {
    this.itemSelected.emit(item);
  }
}
