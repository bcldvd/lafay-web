import { Component, OnInit } from '@angular/core';
import { session, sessionWithJumpingRope } from './warmup.constants';
import { ProfileService } from 'src/app/profile/profile.service';
import { take, filter } from 'rxjs/operators';
import { Session } from '../workouts.interfaces';
import { WORKOUTS_STEPS } from '../workouts.constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-warmup',
  templateUrl: './warmup.component.html',
  styleUrls: ['./warmup.component.scss'],
})
export class WarmupComponent implements OnInit {
  session: Session;
  STEPS = WORKOUTS_STEPS;
  currentStep: WORKOUTS_STEPS;
  level: string;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

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
    this.route.queryParams
      .pipe(filter((params) => params.level))
      .subscribe((params) => {
        this.level = params.level;
      });
  }

  previousStep() {
    this.currentStep--;
  }

  nextStep() {
    this.currentStep++;
  }

  onSessionDone() {
    if (this.level) {
      this.router.navigate([`../../${this.level}`], {
        relativeTo: this.route,
      });
    }
  }
}
