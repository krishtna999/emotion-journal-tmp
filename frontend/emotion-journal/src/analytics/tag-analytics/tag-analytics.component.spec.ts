import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagAnalyticsComponent } from './tag-analytics.component';

describe('TagAnalyticsComponent', () => {
  let component: TagAnalyticsComponent;
  let fixture: ComponentFixture<TagAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
