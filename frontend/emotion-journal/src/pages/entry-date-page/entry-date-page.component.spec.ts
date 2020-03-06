import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryDatePageComponent } from './entry-date-page.component';

describe('EntryDatePageComponent', () => {
  let component: EntryDatePageComponent;
  let fixture: ComponentFixture<EntryDatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryDatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryDatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
