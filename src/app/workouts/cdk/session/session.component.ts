import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Session, Exercise } from '../../workouts.interfaces';
import { BehaviorSubject } from 'rxjs';
import { session } from '../../warmup/warmup.constants';
import { SESSION_STATUSES } from './session.constants';
import { DialogExerciseInfoComponent } from '../session-plan/session-plan.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from './session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {
  @Input() session: Session;

  @Output() repsDone = new EventEmitter<Session>();
  @Output() done = new EventEmitter<Session>();

  currentExercise$ = new BehaviorSubject<Exercise>(null);
  currentStatus: SESSION_STATUSES;
  STATUSES = SESSION_STATUSES;
  exercisesNb: number;
  currentExerciseNb: number;
  sets: number[];
  currentSet: number;
  formGroup: FormGroup;
  cooldownDone = false;
  sessionProgress = 0;
  currentExerciseWSets = 0;
  totalExercisesWSets: number;

  constructor(
    public dialog: MatDialog,
    formBuilder: FormBuilder,
    private sessionService: SessionService
  ) {
    this.formGroup = formBuilder.group({
      reps: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.session = this.sessionService.mapSession(this.session);
    this.session = this.session.map((exercise) => {
      if (!exercise.skipEffective) {
        exercise.effective = [];
      }
      return exercise;
    });
    this.currentExerciseNb = 0;
    this.currentExercise$.next(this.session[this.currentExerciseNb]);
    this.currentStatus = SESSION_STATUSES.EXERCISE;
    this.exercisesNb = this.session.length;
    this.currentSet = 1;
    const nextReps = this.session[this.currentExerciseNb].reps;
    if (nextReps) {
      this.formGroup.patchValue({ reps: nextReps });
    }
    this.totalExercisesWSets = this.calculateTotalExercisesWSets(this.session);
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
      this.currentSet = 1;
      const exercise = this.session[this.currentExerciseNb];
      this.currentExercise$.next(exercise);
    }

    this.formGroup.reset();
    const nextReps = this.session[this.currentExerciseNb].reps;
    if (nextReps) {
      this.formGroup.patchValue({ reps: nextReps });
    }
    this.cooldownDone = false;
    this.currentExerciseWSets++;
    this.sessionProgress =
      (this.currentExerciseWSets * 100) / this.totalExercisesWSets;
    this.currentStatus = SESSION_STATUSES.EXERCISE;
  }

  exerciseDone() {
    if (this.currentStatus === SESSION_STATUSES.REST) {
      if (this.exercisesNb === this.currentExerciseNb) {
        this.done.emit(this.getEffective(this.session));
      } else {
        this.currentExercise$.next(session[this.currentExerciseNb]);
        this.currentStatus = SESSION_STATUSES.EXERCISE;
      }
    } else if (this.currentStatus === SESSION_STATUSES.EXERCISE) {
      this.currentStatus = SESSION_STATUSES.REST;
    }
  }

  restDone() {
    if (!this.session[this.currentExerciseNb].skipEffective) {
      const reps = this.formGroup.get('reps').value;
      this.session[this.currentExerciseNb].effective[
        this.currentSet - 1
      ] = reps;
      this.emitEffective();
    }
    if (this.currentSet < this.sets.length) {
      this.nextExercise();
    } else if (this.session[this.currentExerciseNb + 1]) {
      this.nextExercise();
    } else {
      this.done.emit(this.getEffective(this.session));
    }
  }

  restTimerDone() {
    this.cooldownDone = true;
    if (
      this.session[this.currentExerciseNb].skipEffective ||
      (this.formGroup.valid && this.formGroup.get('reps')['_pendingTouched'])
    ) {
      this.restDone();
    }
  }

  emitEffective() {
    this.repsDone.emit(this.getEffective(this.session));
  }

  private getEffective(effectiveSession) {
    return effectiveSession.map(({ name, effective }) => ({
      name,
      effective,
    }));
  }

  openDialog(exercise) {
    this.dialog.open(DialogExerciseInfoComponent, {
      data: exercise,
      maxWidth: '99vw',
      panelClass: 'full-width-dialog',
    });
  }

  private calculateTotalExercisesWSets(exercises: Session): number {
    let total = 0;

    exercises.forEach((exercise) => {
      total += exercise.sets;
    });

    return total;
  }
}
