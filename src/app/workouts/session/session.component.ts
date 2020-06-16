import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Session, Exercise } from '../workouts.interfaces';
import { BehaviorSubject } from 'rxjs';
import { session } from '../warmup/warmup.constants';
import { EXERCISES_IMAGE_PATH } from 'src/app/app.constants';
import { SESSION_STATUSES } from './session.constants';
import { DialogExerciseInfoComponent } from '../session-plan/session-plan.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {
  @Input() session: Session;

  currentExercise$ = new BehaviorSubject<Exercise>(null);
  currentStatus: SESSION_STATUSES;
  STATUSES = SESSION_STATUSES;
  exercisesNb: number;
  currentExerciseNb: number;
  sets: number[];
  currentSet: number;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.session = this.session.map((exercise) => {
      exercise.image = `${EXERCISES_IMAGE_PATH}/${exercise.name}.png`;
      exercise.imageFull = `${EXERCISES_IMAGE_PATH}/${exercise.name}-full.png`;
      return exercise;
    });
    this.currentExerciseNb = 0;
    this.currentExercise$.next(this.session[this.currentExerciseNb]);
    this.currentStatus = SESSION_STATUSES.EXERCISE;
    this.exercisesNb = this.session.length;
    this.currentSet = 1;
    this.currentExercise$.subscribe((exercise) => {
      this.sets = Array(exercise.sets)
        .fill(0)
        .map((x, i) => i + 1);
    });
  }

  private nextExercise() {
    if (this.currentSet < this.sets.length) {
      this.currentSet++;
    } else {
      this.currentExerciseNb++;
      const exercise = this.session[this.currentExerciseNb];
      this.currentExercise$.next(exercise);
    }

    this.currentStatus = SESSION_STATUSES.EXERCISE;
  }

  exerciseDone() {
    if (this.currentStatus === SESSION_STATUSES.REST) {
      if (this.exercisesNb === this.currentExerciseNb) {
        this.currentStatus = SESSION_STATUSES.DONE;
      } else {
        this.currentExercise$.next(session[this.currentExerciseNb]);
        this.currentStatus = SESSION_STATUSES.EXERCISE;
      }
    } else if (this.currentStatus === SESSION_STATUSES.EXERCISE) {
      this.currentStatus = SESSION_STATUSES.REST;
    }
  }

  restDone() {
    if (
      this.session[this.currentExerciseNb].skipEffective &&
      this.session[this.currentExerciseNb + 1]
    ) {
      this.nextExercise();
    } else if (!this.session[this.currentExerciseNb + 1]) {
      this.currentStatus = SESSION_STATUSES.DONE;
    }
  }

  openDialog(exercise) {
    this.dialog.open(DialogExerciseInfoComponent, {
      data: exercise,
    });
  }
}
