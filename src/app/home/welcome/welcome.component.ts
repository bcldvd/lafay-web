import { Component, OnInit } from '@angular/core';
import { WorkoutsService } from '../../workouts/workouts.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Workout } from 'src/app/workouts/workouts.interfaces';
import { AuthService } from 'src/app/auth/auth.service';
import { ProfileService } from 'src/app/profile/profile.service';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/profile/profile.interfaces';
import { take } from 'rxjs/operators';
import { placementTestPath } from 'src/app/workouts/placement-test/placement-test.constants';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  sessions$: Observable<Workout[]>;
  profile$ = new BehaviorSubject<UserProfile>(null);
  PLACEMENT_TEST = placementTestPath;

  constructor(
    private workoutsService: WorkoutsService,
    public auth: AuthService,
    private profile: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sessions$ = this.workoutsService.getWorkouts();
    this.profile
      .getProfile()
      .pipe(take(1))
      .subscribe((profile) => {
        this.profile$.next(profile);
      });
  }

  goToTodaySession() {
    this.profile$.subscribe((profile) => {
      this.router.navigate(['level', 'warmup'], {
        queryParams: {
          level: profile.level,
        },
      });
    });
  }
}
