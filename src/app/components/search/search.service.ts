import { Injectable } from "@angular/core";
import { SearchApiService } from "./search-api.service";
import { Subject, of, BehaviorSubject, combineLatest } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map
} from "rxjs/operators";

@Injectable()
export class SearchService {
  private searchResults$ = new BehaviorSubject<any>([]);
  private term$ = new BehaviorSubject<string>("");
  private page$ = new BehaviorSubject<number>(1);

  constructor(private searchApiService: SearchApiService) {
    this.init();
  }

  public setTerm(term: string): void {
    this.setPage(1);
    this.setResults([]);
    this.term$.next(term);
  }

  public nextPage(): number {
    const nextPage = this.page$.getValue() + 1;
    this.setPage(nextPage);
    return nextPage;
  }

  public clear(): void {
    this.setTerm("");
    this.setPage(1);
    this.setResults([]);
  }

  public getResults(): Subject<any> {
    return this.searchResults$;
  }

  private setPage(page = 1): void {
    this.page$.next(page);
  }

  private setResults(res: any): void {
    this.searchResults$.next(res);
  }

  private appendResults(res: any): void {
    let value = this.searchResults$.getValue();
    if (value && value.items) {
      value.items.push(...res.items);
    } else {
      value = res;
    }
    this.searchResults$.next(value);
  }

  private init() {
    this.subscribeToTermChangeOnce();
  }

  private subscribeToTermChangeOnce(): void {
    combineLatest(this.term$, this.page$)
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(([term, page = 1]) => {
          console.log(term);
          return !term ? of([]) : this.searchApiService.search(term, page);
        }),
        map(res => this.appendResults(res))
      )
      .subscribe();
  }
}
