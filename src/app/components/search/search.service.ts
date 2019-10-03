import { Injectable } from "@angular/core";
import { SearchApiService } from "./search-api.service";
import { Subject, of, combineLatest, BehaviorSubject } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
  tap,
  finalize
} from "rxjs/operators";
import { SearchRes, SearchItem } from "./search-models";
import { SearchState } from "./search.state";

@Injectable()
export class SearchService {
  constructor(
    private searchApiService: SearchApiService,
    private searchState: SearchState
  ) {
    this.init();
  }

  public setSelectedItem(item: SearchItem): void {
    this.searchState.setSelectedItem(item);
  }

  public getSelectedItem(): Subject<SearchItem> {
    return this.searchState.getSelectedItem();
  }

  public getLoader(): BehaviorSubject<boolean> {
    return this.searchState.getLoader();
  }

  public setLoader(value: boolean): void {
    this.searchState.setLoader(value);
  }
  public setTerm(term: string): void {
    this.searchState.setTerm(term);
  }

  public getResults(): BehaviorSubject<SearchRes> {
    return this.searchState.getResults();
  }

  public setNextPage(): number {
    return this.searchState.setNextPage();
  }

  public clear(): void {
    this.searchState.clear();
  }

  private init() {
    this.subscribeToTermChangeOnce();
  }

  private subscribeToTermChangeOnce(): void {
    combineLatest(this.searchState.getTerm(), this.searchState.getPage())
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(val => this.setLoader(true)),
        switchMap(([term, page = 1]) => {
          return !term ? of(null) : this.searchApiService.search(term, page);
        }),
        tap(res => this.searchState.appendResults(res)),
        map(() => this.setLoader(false))
      )
      .subscribe();
  }
}
