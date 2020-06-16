import { Component, OnInit } from '@angular/core';
import { session, sessionWithJumpingRope } from './warmup.constants';
import { ProfileService } from 'src/app/profile/profile.service';
import { take } from 'rxjs/operators';
import { Session } from '../workouts.interfaces';
import { WORKOUTS_STEPS } from '../workouts.constants';

@Component({
  selector: 'app-warmup',
  templateUrl: './warmup.component.html',
  styleUrls: ['./warmup.component.scss'],
})
export class WarmupComponent implements OnInit {
  session: Session;
  STEPS = WORKOUTS_STEPS;
  currentStep: WORKOUTS_STEPS;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.currentStep = WORKOUTS_STEPS.SESSION_PLAN;
    this.profileService
      .getProfile()
      .pipe(take(1))
      .subscribe(
        (profile) =>
          (this.session = profile.preferences.jumpingRope
            ? sessionWithJumpingRope
            : session)
      );
    /* this.session = session;
    this.currentStep = WORKOUTS_STEPS.SESSION; */
  }

  previousStep() {
    this.currentStep--;
  }

  nextStep() {
    this.currentStep++;
  }
}
