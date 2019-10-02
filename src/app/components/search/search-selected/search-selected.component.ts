import { Component, OnInit, Input } from "@angular/core";
import { SearchItem } from "../search-models";

@Component({
  selector: "app-search-selected",
  templateUrl: "./search-selected.component.html",
  styleUrls: ["./search-selected.component.css"]
})
export class SearchSelectedComponent implements OnInit {
  @Input() selectedItem$: SearchItem;
  constructor() {}

  ngOnInit() {}
}
