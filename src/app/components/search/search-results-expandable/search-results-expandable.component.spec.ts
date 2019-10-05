import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchResultsExpandableComponent } from "./search-results-expandable.component";
import { SharedModule } from "../../../shared/shared.module";
import { SearchModule } from "../search.module";

describe("SearchResultsExpandableComponent", () => {
  let component: SearchResultsExpandableComponent;
  let fixture: ComponentFixture<SearchResultsExpandableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SearchModule, SharedModule],
      declarations: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
