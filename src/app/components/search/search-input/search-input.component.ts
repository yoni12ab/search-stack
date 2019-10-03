import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";
import { SearchService } from "../search.service";

@Component({
  selector: "app-search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements OnInit {
  @Output() searchChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  keyDown(term: string): void {
    this.searchChange.emit(term);
  }
}
