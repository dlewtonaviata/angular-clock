import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockOptionsComponent } from './clock-options.component';

describe('ClockOptionsComponent', () => {
  let component: ClockOptionsComponent;
  let fixture: ComponentFixture<ClockOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
