import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsExpandableComponent } from './search-results-expandable.component';

describe('SearchResultsExpandableComponent', () => {
  let component: SearchResultsExpandableComponent;
  let fixture: ComponentFixture<SearchResultsExpandableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsExpandableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
