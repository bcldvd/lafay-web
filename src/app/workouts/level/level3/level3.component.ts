import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { level, session } from './level3.constants';
import { HomeService } from 'src/app/home/home.service';
import { WorkoutsService } from '../../workouts.service';
import { ProfileService } from 'src/app/profile/profile.service';
import { take } from 'rxjs/operators';
import { Workout, Session } from '../../workouts.interfaces';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss'],
})
export class Level3Component implements OnInit {
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
          (workout) => workout.level === '2'
        );
        workouts = workouts.filter((workout) => workout.level === level);
        this.session$.next(
          workouts.length > 0
            ? this.decideSession(workouts)
            : this.workouts.setSessionFromPreviousLevel(
                session,
                previousLevelWorkouts,
                ['G', 'H']
              )
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

  decideNewLevel(effectiveSession: Session) {
    const exerciseB = effectiveSession[0];

    const lowestAverageRep = this.workouts.getLowestAverageRep(exerciseB);

    if (lowestAverageRep >= 10) {
      this.newLevel = '4';
      this.profileService.updateLevel(this.newLevel);
    }
  }
}
