import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Session, Exercise } from '../workouts.interfaces';
import { BehaviorSubject } from 'rxjs';
import { session } from '../warmup/warmup.constants';
import { EXERCISES_IMAGE_PATH } from 'src/app/app.constants';
import { STATUS } from './session.constants';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {
  @Input() session: Session;

  currentExercise$ = new BehaviorSubject<Exercise>(null);
  currentStatus: STATUS;
  STATUS = STATUS;
  exercisesNb: number;
  currentExerciseNb: number;
  sets: number[];
  currentSet: number;

  constructor() {}

  ngOnInit(): void {
    this.session = this.session.map((exercise) => {
      exercise.image = `${EXERCISES_IMAGE_PATH}/${exercise.name}.png`;
      exercise.imageFull = `${EXERCISES_IMAGE_PATH}/${exercise.name}-full.png`;
      return exercise;
    });
    this.currentExerciseNb = 0;
    this.currentExercise$.next(session[this.currentExerciseNb]);
    this.currentStatus = STATUS.EXERCISE;
    this.exercisesNb = this.session.length;
    this.currentSet = 0;
    this.currentExercise$.subscribe((exercise) => {
      this.sets = Array(exercise.sets)
        .fill(0)
        .map((x, i) => i + 1);
      this.currentExerciseNb++;
      this.currentSet++;
    });
  }

  exerciseDone() {
    this.currentExercise$.next(session[this.currentExerciseNb]);
  }
}
