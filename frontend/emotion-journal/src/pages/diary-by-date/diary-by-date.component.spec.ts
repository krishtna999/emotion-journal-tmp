import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryByDateComponent } from './diary-by-date.component';

describe('DiaryByDateComponent', () => {
  let component: DiaryByDateComponent;
  let fixture: ComponentFixture<DiaryByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
