import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebartaskComponent } from './sidebartask.component';

describe('SidebartaskComponent', () => {
  let component: SidebartaskComponent;
  let fixture: ComponentFixture<SidebartaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebartaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebartaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
