import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Session, Workout } from '../../workouts.interfaces';
import { HomeService } from 'src/app/home/home.service';
import { WorkoutsService } from '../../workouts.service';
import { ProfileService } from 'src/app/profile/profile.service';
import { take } from 'rxjs/operators';
import { level, session } from './level4.constants';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.scss'],
})
export class Level4Component implements OnInit {
  session$ = new BehaviorSubject<Session>(null);
  level = level;
  newLevel: string;

  constructor(
    home: HomeService,
    private workouts: WorkoutsService,
    private profileService: ProfileService
  ) {
    home.setLevel(this.level);
  }

  ngOnInit(): void {
    this.workouts
      .getWorkouts(30)
      .pipe(take(1))
      .subscribe((workouts) => {
        const previousLevelWorkouts = workouts.filter(
          (workout) => workout.level === '3'
        );
        workouts = workouts.filter((workout) => workout.level === level);
        this.session$.next(
          workouts.length > 0
            ? this.decideSession(workouts)
            : this.setSessionFromPreviousLevel(session, previousLevelWorkouts)
        );
      });
  }

  private decideSession(workouts: Workout[]) {
    const newSession = [...session];

    const exercises = workouts[0].exercises.filter(
      (exercise) => exercise.name !== 'K2'
    );

    exercises.forEach((exercise, index) => {
      const lowestAverageRep = this.workouts.getLowestAverageRep(exercise);

      if (session[index].reps <= lowestAverageRep || !session[index].reps) {
        newSession[index].reps = lowestAverageRep + 1;
      }
    });

    const exerciseA = workouts[0].exercises[1];
    if (exerciseA.name === 'A3' && exerciseA.effective[0] >= 8) {
      newSession[1].name = 'A4';
    } else if (exerciseA.name === 'A4' && exerciseA.effective[0] >= 8) {
      newSession[1].name = 'A5';
    } else if (exerciseA.name === 'A5' && exerciseA.effective[0] >= 8) {
      newSession[1].name = 'A6';
    }

    return newSession;
  }

  private setSessionFromPreviousLevel(
    baseSession: Session,
    previousLevelWorkouts: Workout[]
  ) {
    const newBaseSession = this.workouts.setSessionFromPreviousLevel(
      baseSession,
      previousLevelWorkouts,
      ['G', 'H']
    );

    const exerciseA = previousLevelWorkouts[0].exercises[1].name;
    newBaseSession[1].name = exerciseA;

    return newBaseSession;
  }

  decideNewLevel(effectiveSession: Session) {
    const evaluatedExercises = effectiveSession.filter(
      (exercise) =>
        exercise.name !== 'G' && exercise.name !== 'H' && exercise.name !== 'K2'
    );

    let lessThan8 = false;
    evaluatedExercises.forEach((exercise) => {
      exercise.effective.forEach((rep) => {
        if (rep < 8) {
          lessThan8 = true;
        }
      });
    });

    if (!lessThan8) {
      this.newLevel = '5';
      this.profileService.updateLevel(this.newLevel);
    }
  }
}
