import { Component, OnInit, ViewChild } from '@angular/core';
import { session, level } from './1a.constants';
import { Session, Workout } from '../../workouts.interfaces';
import { HomeService } from 'src/app/home/home.service';
import { WorkoutComponent } from '../../cdk/workout/workout.component';
import { Router } from '@angular/router';
import { placementTestPath } from '../../placement-test/placement-test.constants';
import { WorkoutsService } from '../../workouts.service';
import { BehaviorSubject } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-level-1a',
  templateUrl: './1a.component.html',
  styleUrls: ['./1a.component.scss'],
})
export class Level1aComponent implements OnInit {
  session = session;
  session$ = new BehaviorSubject<Session>(null);
  level = level;
  newLevel: string = null;
  placementTestPath = placementTestPath;

  @ViewChild('workout') workout!: WorkoutComponent;

  constructor(
    home: HomeService,
    private router: Router,
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
        this.session$.next(this.decideSession(workouts));
      });
  }

  private decideSession(workouts: Workout[]) {
    let nbSets = 2;

    if (this.workoutStartedMoreThanTwoWeeksAgo(workouts[workouts.length - 1])) {
      nbSets = 3;
    }

    let newSession = [...session];

    const firstExercise = workouts[0].exercises[0];
    if (firstExercise.name === 'A1' && firstExercise.effective[0] > 7) {
      newSession[0].name = 'A2';
    } else if (firstExercise.name === 'A2' && firstExercise.effective[0] > 7) {
      newSession[0].name = 'A2';
      newSession.unshift({
        name: 'A3',
        rest: 120,
      });
    } else if (firstExercise.name === 'A3' && firstExercise.effective[0] > 7) {
      newSession[0].name = 'A2';
      newSession.unshift({
        name: 'A4',
        rest: 120,
      });
    } else if (firstExercise.name === 'A4' && firstExercise.effective[0] > 7) {
      newSession[0].name = 'A2';
      newSession.unshift({
        name: 'A5',
        rest: 120,
      });
    } else if (firstExercise.name === 'A5' && firstExercise.effective[0] > 7) {
      newSession[0].name = 'A2';
      newSession.unshift({
        name: 'A6',
        rest: 120,
      });
    }

    newSession = newSession.map((exercise) => {
      exercise.sets = nbSets;
      return exercise;
    });

    return newSession;
  }

  private workoutStartedMoreThanTwoWeeksAgo(workout: Workout) {
    const TWO_WEEKS = 60 * 60 * 24 * 14 * 1000;
    return workout.date < Date.now() - TWO_WEEKS;
  }

  decideNewLevel(effectiveSession: Session) {
    const exerciseA = effectiveSession[0];

    if (exerciseA.name === 'A6' && exerciseA.effective[0] > 7) {
      this.newLevel = placementTestPath;
      this.profileService.updateLevel(this.newLevel);
    }
  }

  onSessionDone() {
    if (this.newLevel) {
      this.workout.nextStep();
    } else {
      this.router.navigate(['/']);
    }
  }
}
