import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndEventComponent } from './end-event.component';

describe('EndEventComponent', () => {
  let component: EndEventComponent;
  let fixture: ComponentFixture<EndEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
