import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResHeadComponent } from './res-head.component';

describe('ResHeadComponent', () => {
  let component: ResHeadComponent;
  let fixture: ComponentFixture<ResHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
