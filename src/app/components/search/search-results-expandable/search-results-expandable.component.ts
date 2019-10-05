import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { SearchRes, SearchItem } from "../search-models";
import { IPageInfo, VirtualScrollerComponent } from "ngx-virtual-scroller";

@Component({
  selector: "app-search-results-expandable",
  templateUrl: "./search-results-expandable.component.html",
  styleUrls: ["./search-results-expandable.component.scss"]
})
export class SearchResultsExpandableComponent implements OnInit {
  @Input() public searchResults$: BehaviorSubject<SearchRes>;
  @Output() nextPage = new EventEmitter<void>();
  public rxOf = of;

  constructor() {}

  ngOnInit() {}

  protected fetchMore(event: IPageInfo) {
    const res = this.searchResults$.getValue();
    if (res && event.endIndex !== res.items.length - 1) return;
    this.nextPage.emit();
  }
}
