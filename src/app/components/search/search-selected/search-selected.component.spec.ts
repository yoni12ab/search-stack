import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchSelectedComponent } from "./search-selected.component";
import { SharedModule } from "../../../shared/shared.module";
import { SearchModule } from "../search.module";

describe("SearchSelectedComponent", () => {
  let component: SearchSelectedComponent;
  let fixture: ComponentFixture<SearchSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SearchModule, SharedModule],
      declarations: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
