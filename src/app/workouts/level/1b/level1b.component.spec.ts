import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1bComponent } from './level1b.component';

describe('Level1bComponent', () => {
  let component: Level1bComponent;
  let fixture: ComponentFixture<Level1bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
