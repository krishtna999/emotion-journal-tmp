import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagNameAutocompleteComponent } from './tag-name-autocomplete.component';

describe('TagNameAutocompleteComponent', () => {
  let component: TagNameAutocompleteComponent;
  let fixture: ComponentFixture<TagNameAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagNameAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagNameAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
