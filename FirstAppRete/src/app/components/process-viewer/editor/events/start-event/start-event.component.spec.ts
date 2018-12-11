import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartEventComponent } from './start-event.component';

describe('StartEventComponent', () => {
  let component: StartEventComponent;
  let fixture: ComponentFixture<StartEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
