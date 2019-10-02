import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { SearchRes } from "./search-models";

@Injectable()
export class SearchApiService {
  private readonly PAGE_SIZE = 5;

  constructor(private http: HttpClient) {}

  public search(term: string, page = 1): Observable<SearchRes> {
    return this.getSearchReq(term, page);
  }

  private getSearchReq(term: string, page = 1): Observable<SearchRes> {
    return this.http.get<SearchRes>(
      `https://api.stackexchange.com/2.2/tags/${term}/faq?site=stackoverflow&pageSize=${this.PAGE_SIZE}&page=${page}`
    );
  }
}
