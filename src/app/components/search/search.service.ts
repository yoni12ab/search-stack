import { Injectable } from "@angular/core";
import { SearchApiService } from "./search-api.service";
import {
  Subject,
  of,
  combineLatest,
  BehaviorSubject,
  Observable,
  never
} from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
  tap,
  finalize,
  catchError
} from "rxjs/operators";
import { SearchRes, SearchItem } from "./search-models";
import { SearchState } from "./search.state";
import { HttpErrorResponse } from "@angular/common/http";
import { NotificationService } from "src/app/core/notification.service";
import { LoggingService } from "src/app/core/logging.service";

@Injectable()
export class SearchService {
  constructor(
    private searchApiService: SearchApiService,
    private searchState: SearchState,
    private notificationService: NotificationService,
    private loggingService: LoggingService
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

  public getNotFound(): BehaviorSubject<boolean> {
    return this.searchState.getNotFound();
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
        tap(() => this.setLoader(true)),
        switchMap(([term, page = 1]) => {
          return !term ? of(null) : this.searchApiService.search(term, page);
        }),
        map(res => this.searchState.appendResults(res)),
        tap(this.setFoundResults.bind(this)),
        catchError(this.handleError.bind(this)),
        tap(() => this.setLoader(false))
      )
      .subscribe();
  }

  private setFoundResults(res: SearchRes): void {
    let existingRes = this.searchState.getResults().getValue();
    let term = this.searchState.getTerm().getValue();
    const existingItems =
      existingRes && existingRes.items && existingRes.items.length;
    const notFound = term && !existingItems;
    this.searchState.setNotFound(notFound);
  }

  private handleError(
    err: HttpErrorResponse,
    source$: Observable<any>
  ): Observable<any> {
    this.searchState.clear();
    this.notificationService.error(err.message);
    this.loggingService.log(`searchApiService error`, err);
    return source$;
  }
}
