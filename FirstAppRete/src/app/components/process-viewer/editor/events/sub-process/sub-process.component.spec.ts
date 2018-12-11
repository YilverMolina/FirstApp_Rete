import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProcessComponent } from './sub-process.component';

describe('SubProcessComponent', () => {
  let component: SubProcessComponent;
  let fixture: ComponentFixture<SubProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
