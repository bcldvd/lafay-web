import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level4Component } from './level4.component';

describe('Level4Component', () => {
  let component: Level4Component;
  let fixture: ComponentFixture<Level4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
