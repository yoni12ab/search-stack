import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { SearchRes, SearchItem } from "./search-models";

@Injectable()
export class SearchState {
  private searchResults$ = new BehaviorSubject<SearchRes>(null);
  private term$ = new BehaviorSubject<string>("");
  private page$ = new BehaviorSubject<number>(1);
  private selectedItem$ = new Subject<SearchItem>();
  private loader$ = new BehaviorSubject<boolean>(false);
  private notFound$ = new BehaviorSubject<boolean>(false);

  public setTerm(term: string): void {
    this.resetBeforeNewTerm();
    this.term$.next(term);
  }

  public getLoader(): BehaviorSubject<boolean> {
    return this.loader$;
  }

  public setLoader(value: boolean): void {
    this.loader$.next(value);
  }

  public getNotFound(): BehaviorSubject<boolean> {
    return this.notFound$;
  }

  public setNotFound(value: boolean): void {
    this.notFound$.next(value);
  }

  public getSelectedItem(): Subject<SearchItem> {
    return this.selectedItem$;
  }

  public setSelectedItem(item: SearchItem): void {
    this.selectedItem$.next(item);
  }

  public getTerm(): BehaviorSubject<string> {
    return this.term$;
  }
  public setPage(page = 1): void {
    this.page$.next(page);
  }

  public getPage(): BehaviorSubject<number> {
    return this.page$;
  }

  public setResults(res: SearchRes): void {
    this.searchResults$.next(res);
  }

  public appendResults(res: SearchRes): void {
    let value = this.searchResults$.getValue();
    if (res && value && value.items) {
      value.items.push(...res.items);
    } else {
      value = res;
    }
    this.searchResults$.next(value);
  }

  public getResults(): BehaviorSubject<SearchRes> {
    return this.searchResults$;
  }

  public resetBeforeNewTerm() {
    this.setNotFound(false);
    this.setSelectedItem(null);
    this.setPage(1);
    this.setResults(null);
  }

  public clear() {
    this.setTerm("");
    this.setPage(1);
    this.setResults(null);
  }

  public setNextPage(): number {
    const currPage = this.getPage().getValue();
    const nextPage = currPage + 1;
    this.setPage(nextPage);
    return nextPage;
  }
}
