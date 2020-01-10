import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRudComponent } from './event-rud.component';

describe('EventDisplayComponent', () => {
  let component: EventRudComponent;
  let fixture: ComponentFixture<EventRudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
