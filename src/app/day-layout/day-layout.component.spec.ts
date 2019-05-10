import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayLayoutComponent } from './day-layout.component';

describe('DayLayoutComponent', () => {
  let component: DayLayoutComponent;
  let fixture: ComponentFixture<DayLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
