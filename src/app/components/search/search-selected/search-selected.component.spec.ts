import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSelectedComponent } from './search-selected.component';

describe('SearchSelectedComponent', () => {
  let component: SearchSelectedComponent;
  let fixture: ComponentFixture<SearchSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
