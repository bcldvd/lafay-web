import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { level, session } from './level5.constants';
import { HomeService } from 'src/app/home/home.service';
import { WorkoutsService } from '../../workouts.service';
import { ProfileService } from 'src/app/profile/profile.service';
import { take } from 'rxjs/operators';
import { Workout, Session } from '../../workouts.interfaces';

@Component({
  selector: 'app-level5',
  templateUrl: './level5.component.html',
  styleUrls: ['./level5.component.scss'],
})
export class Level5Component implements OnInit {
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
            : this.workouts.setSessionFromPreviousLevel(
                session,
                previousLevelWorkouts,
                ['F', 'G', 'H', 'K2']
              )
        );

        if (workouts.length >= 5) {
          this.newLevel = '6';
        }
      });
  }

  private decideSession(workouts: Workout[]) {
    const newSession = [...session];

    workouts[0].exercises.forEach((exercise, index) => {
      if (
        exercise.name !== 'B' &&
        exercise.name !== 'A2' &&
        exercise.name !== 'C' &&
        exercise.name !== 'Z'
      ) {
        const lowestAverageRep = this.workouts.getLowestAverageRep(exercise);

        if (session[index].reps <= lowestAverageRep || !session[index].reps) {
          newSession[index].reps = lowestAverageRep + 1;
        }
      }
    });

    return newSession;
  }

  decideNewLevel(effectiveSession: Session) {
    if (this.newLevel) {
      this.profileService.updateLevel(this.newLevel);
    }
  }
}
