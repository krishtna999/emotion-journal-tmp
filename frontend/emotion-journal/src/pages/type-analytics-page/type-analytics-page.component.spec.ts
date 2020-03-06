import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAnalyticsPageComponent } from './type-analytics-page.component';

describe('TypeAnalyticsPageComponent', () => {
  let component: TypeAnalyticsPageComponent;
  let fixture: ComponentFixture<TypeAnalyticsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAnalyticsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAnalyticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
