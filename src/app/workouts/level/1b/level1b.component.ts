import { Component, OnInit, ViewChild } from '@angular/core';
import { level, session } from './level1b.constants';
import { HomeService } from 'src/app/home/home.service';
import { WorkoutsService } from '../../workouts.service';
import { ProfileService } from 'src/app/profile/profile.service';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Session, Workout } from '../../workouts.interfaces';

@Component({
  selector: 'app-level1b',
  templateUrl: './level1b.component.html',
  styleUrls: ['./level1b.component.scss'],
})
export class Level1bComponent implements OnInit {
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
        this.session$.next(this.decideSession(workouts));
      });
  }

  private decideSession(workouts: Workout[]) {
    const newSession = [...session];

    const exerciseA = workouts[0].exercises[1];
    if (exerciseA.name === 'A1' && exerciseA.effective[0] > 7) {
      newSession[1].name = 'A2';
    }

    const exerciseC = workouts[0].exercises[3];
    if (exerciseC.name === 'C1' && exerciseC.effective[0] > 14) {
      newSession[3].name = 'C3';
    }

    const exerciseE = workouts[0].exercises[4];
    if (exerciseE.name === 'E' && exerciseE.effective[0] > 14) {
      newSession[4].name = 'E1';
    }

    return newSession;
  }

  decideNewLevel(effectiveSession: Session) {
    const exerciseB = effectiveSession[0];

    if (exerciseB.effective[0] > 7) {
      this.newLevel = '2';
      this.profileService.updateLevel(this.newLevel);
    }
  }
}
