import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagTypeAutocompleteComponent } from './tag-type-autocomplete.component';

describe('TagTypeAutocompleteComponent', () => {
  let component: TagTypeAutocompleteComponent;
  let fixture: ComponentFixture<TagTypeAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagTypeAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagTypeAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
