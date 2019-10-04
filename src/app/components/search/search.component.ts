import { Component, OnInit, OnDestroy } from "@angular/core";
import { SearchRes, SearchItem } from "./search-models";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { SearchService } from "./search.service";
import { UtilsService } from "../../core/utils.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit, OnDestroy {
  public searchResults$: Subject<SearchRes>;
  public selectedItem$: Subject<SearchItem>;
  public searchLoader$: BehaviorSubject<boolean>;
  public isScreenSmall$: Observable<boolean>;
  public notFound$: Observable<boolean>;

  constructor(
    private searchService: SearchService,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    this.searchResults$ = this.searchService.getResults();
    this.selectedItem$ = this.searchService.getSelectedItem();
    this.searchLoader$ = this.searchService.getLoader();
    this.notFound$ = this.searchService.getNotFound();
    this.isScreenSmall$ = this.utilsService.getIsSmallScreen();
  }

  public nextPage(): void {
    this.searchService.setNextPage();
  }

  public searchChange(term: string): void {
    this.searchService.setTerm(term);
  }

  public itemSelected(item: SearchItem) {
    this.searchService.setSelectedItem(item);
  }

  public ngOnDestroy() {
    this.searchService.clear();
  }
}
