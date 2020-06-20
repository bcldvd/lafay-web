import { Component, OnInit } from '@angular/core';
import { WorkoutsService } from '../../workouts/workouts.service';
import { Observable } from 'rxjs';
import { Workout } from 'src/app/workouts/workouts.interfaces';
import { AuthService } from 'src/app/auth/auth.service';
import { ProfileService } from 'src/app/profile/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  sessions$: Observable<Workout[]>;

  constructor(
    private workoutsService: WorkoutsService,
    public auth: AuthService,
    private profile: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sessions$ = this.workoutsService.getWorkouts();
  }

  goToTodaySession() {
    this.profile.getProfile().subscribe((profile) => {
      this.router.navigate(['level', 'warmup'], {
        queryParams: {
          level: profile.level,
        },
      });
    });
  }
}
