import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";
import { SearchService } from "../search.service";
import { SearchRes, SearchItem } from "../search-models";
import { BehaviorSubject } from "rxjs";
import { IPageInfo } from "ngx-virtual-scroller";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnInit {
  @Input() public searchResults$: BehaviorSubject<SearchRes>;
  @Output() nextPage = new EventEmitter<void>();
  @Output() itemSelected = new EventEmitter<SearchItem>();
  @Input() selectedItem$: SearchItem;
  constructor() {}

  ngOnInit() {}

  protected fetchMore(event: IPageInfo) {
    const res = this.searchResults$.getValue();
    if (res && event.endIndex !== res.items.length - 1) return;
    this.nextPage.emit();
  }

  public selectItem(item: SearchItem): void {
    this.itemSelected.emit(item);
  }
}
