import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagRudComponent } from './tag-rud.component';

describe('TagDisplayComponent', () => {
  let component: TagRudComponent;
  let fixture: ComponentFixture<TagRudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagRudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagRudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
