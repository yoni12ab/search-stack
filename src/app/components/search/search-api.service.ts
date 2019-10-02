import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchApiService {

  private readonly PAGE_SIZE = 3;
  
  constructor(private http: HttpClient) { }

  public search(term: string, page = 1): Observable<any>{
      return this.getSearchReq(term,page)
        .pipe(map(res=> res))
  }
  
  private getSearchReq(term:string, page = 1): Observable<any>{
    return this.http.get(`https://api.stackexchange.com/2.2/tags/${term}/faq?site=stackoverflow&pageSize=${this.PAGE_SIZE}&page=${page}`);
    
  }
}