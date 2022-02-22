import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, zip } from 'rxjs';
import { level, session } from './level6.constants';
import { HomeService } from 'src/app/home/home.service';
import { WorkoutsService } from '../../workouts.service';
import { ProfileService } from 'src/app/profile/profile.service';
import { take } from 'rxjs/operators';
import { Workout, Session } from '../../workouts.interfaces';

@Component({
  selector: 'app-level6',
  templateUrl: './level6.component.html',
  styleUrls: ['./level6.component.scss'],
})
export class Level6Component implements OnInit {
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
      .getWorkoutsForLevel(level)
      .pipe(take(1))
      .subscribe((workouts) => {
        if (workouts.length > 0) {
          this.session$.next(this.decideSession(workouts));
        } else {
          zip(
            this.workouts.getWorkoutsForLevel('4'),
            this.workouts.getWorkoutsForLevel('5')
          )
            .pipe(take(1))
            .subscribe(([level4workouts, level5workouts]) => {
              this.session$.next(
                this.setSessionFromPreviousLevel(
                  session,
                  level4workouts,
                  level5workouts
                )
              );
            });
        }
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
    level4workouts: Workout[],
    level5workouts: Workout[]
  ) {
    const newBaseSession = this.workouts.setSessionFromPreviousLevel(
      baseSession,
      level5workouts,
      ['E2', 'F', 'G', 'H', 'K2']
    );

    const exerciseA =
      level4workouts.length > 0 ? level4workouts[0].exercises[1].name : 'A3';
    newBaseSession[1].name = exerciseA;

    const exerciseBeffective = level5workouts[0].exercises[0].effective[0];
    if (exerciseBeffective < 20) {
      newBaseSession[0].reps = 5;
    } else if (exerciseBeffective < 25) {
      newBaseSession[0].reps = 7;
    } else if (exerciseBeffective >= 25) {
      newBaseSession[0].reps = 8;
    }

    const exerciseA2effective = level5workouts[0].exercises[2].effective[0];
    if (exerciseA2effective < 20) {
      newBaseSession[2].reps = 5;
    } else if (exerciseA2effective < 25) {
      newBaseSession[2].reps = 7;
    } else if (exerciseA2effective >= 25) {
      newBaseSession[2].reps = 8;
    }

    return newBaseSession;
  }

  decideNewLevel(effectiveSession: Session) {
    const evaluatedExercises = effectiveSession.filter(
      (exercise) =>
        exercise.name === 'B1' ||
        exercise.name === 'A2' ||
        exercise.name === 'I' ||
        exercise.name === 'C1'
    );

    let lessThan10 = false;
    evaluatedExercises.forEach((exercise) => {
      exercise.effective.forEach((rep) => {
        if (rep <= 10) {
          lessThan10 = true;
        }
      });
    });

    if (!lessThan10) {
      this.newLevel = '7';
      this.profileService.updateLevel(this.newLevel);
    }
  }
}
