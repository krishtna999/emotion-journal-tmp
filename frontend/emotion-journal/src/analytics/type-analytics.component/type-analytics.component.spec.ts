import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAnalyticsComponent } from './type-analytics.component';

describe('TypeAnalyticsComponent', () => {
  let component: TypeAnalyticsComponent;
  let fixture: ComponentFixture<TypeAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
