import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryRudComponent } from './entry-rud.component';

describe('EntryDisplayComponent', () => {
  let component: EntryRudComponent;
  let fixture: ComponentFixture<EntryRudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryRudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryRudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
