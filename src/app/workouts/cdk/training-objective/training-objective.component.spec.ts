import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingObjectiveComponent } from './training-objective.component';

describe('TrainingObjectiveComponent', () => {
  let component: TrainingObjectiveComponent;
  let fixture: ComponentFixture<TrainingObjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
