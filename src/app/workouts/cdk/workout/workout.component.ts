import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WORKOUTS_STEPS } from './workout.constants';
import { Session } from '../../workouts.interfaces';
import { WorkoutsService } from '../../workouts.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  STEPS = WORKOUTS_STEPS;
  currentStep: WORKOUTS_STEPS;

  @Input() level: string;

  @Output() decideLevel = new EventEmitter<Session>();

  constructor(private workoutsService: WorkoutsService) {}

  ngOnInit(): void {
    this.currentStep = WORKOUTS_STEPS.SESSION_PLAN;
  }

  previousStep() {
    this.currentStep--;
  }

  nextStep() {
    this.currentStep++;
  }

  onSessionDone(effectiveSession: Session) {
    this.workoutsService.addWorkout({
      level: this.level,
      exercises: effectiveSession,
    });
    this.decideLevel.emit(effectiveSession);
    this.nextStep();
  }
}

@Component({
  selector: 'app-workout-plan',
  template: ` <ng-content></ng-content> `,
})
export class WorkoutPlanComponent {}

@Component({
  selector: 'app-workout-doing',
  template: ` <ng-content></ng-content> `,
})
export class WorkoutDoingComponent {}

@Component({
  selector: 'app-workout-done',
  template: ` <ng-content></ng-content> `,
})
export class WorkoutDoneComponent {}

@Component({
  selector: 'app-workout-new-level',
  template: ` <ng-content></ng-content> `,
})
export class WorkoutNewLevelComponent {}
