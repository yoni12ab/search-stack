import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public searchResults$ ;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchResults$ = this.searchService.getResults();
  }

  public nextPage(): void{
    this.searchService.nextPage();
  }

}