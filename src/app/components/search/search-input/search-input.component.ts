import { Component, OnInit, OnDestroy } from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  constructor(private searchService: SearchService) { }
  
  ngOnInit() {
  
  }
  
  keyDown(term: string): void{
    this.searchService.setTerm(term);
  }
   
  ngOnDestroy(){
    this.searchService.clear();
  } 

}