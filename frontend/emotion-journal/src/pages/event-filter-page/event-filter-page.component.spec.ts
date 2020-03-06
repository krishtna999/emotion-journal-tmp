import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFilterPageComponent } from './event-filter-page.component';

describe('EventFilterPageComponent', () => {
  let component: EventFilterPageComponent;
  let fixture: ComponentFixture<EventFilterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFilterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
