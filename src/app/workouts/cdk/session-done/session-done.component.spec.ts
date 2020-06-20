import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDoneComponent } from './session-done.component';

describe('SessionDoneComponent', () => {
  let component: SessionDoneComponent;
  let fixture: ComponentFixture<SessionDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
