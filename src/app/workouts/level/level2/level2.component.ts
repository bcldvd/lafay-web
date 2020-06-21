import { Component, OnInit } from '@angular/core';
import { Workout, Session } from '../../workouts.interfaces';
import { session, level } from './level2.constants';
import { take } from 'rxjs/operators';
import { HomeService } from 'src/app/home/home.service';
import { WorkoutsService } from '../../workouts.service';
import { ProfileService } from 'src/app/profile/profile.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss'],
})
export class Level2Component implements OnInit {
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
        workouts = workouts.filter((workout) => workout.level === level);
        this.session$.next(
          workouts.length > 0 ? this.decideSession(workouts) : session
        );
      });
  }

  private decideSession(workouts: Workout[]) {
    const newSession = [...session];

    const exercises = workouts[0].exercises.filter(
      (exercise) => exercise.name !== 'K2'
    );

    exercises.forEach((exercise, index) => {
      let lowestAverageRep;
      exercise.effective.forEach((rep, idx) => {
        if (idx === 0) {
          lowestAverageRep = rep;
        } else if (rep < lowestAverageRep) {
          lowestAverageRep = rep;
        }
      });

      if (session[index].reps <= lowestAverageRep) {
        newSession[index].reps = lowestAverageRep + 1;
      }
    });

    return newSession;
  }

  decideNewLevel(effectiveSession: Session) {
    const evaluatedExercises = effectiveSession.filter(
      (exercise) => exercise.name !== 'G' && exercise.name !== 'K2'
    );
    let lessThan10 = false;
    evaluatedExercises.forEach((exercise) => {
      exercise.effective.forEach((rep) => {
        if (rep < 10) {
          lessThan10 = true;
        }
      });
    });

    if (!lessThan10) {
      this.newLevel = '3';
      this.profileService.updateLevel(this.newLevel);
    }
  }
}
