import { Component, OnInit } from '@angular/core';
import { session, sessionWithJumpingRope } from './warmup.constants';
import { ProfileService } from 'src/app/profile/profile.service';
import { take, filter, switchMap } from 'rxjs/operators';
import { Session } from '../workouts.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-warmup',
  templateUrl: './warmup.component.html',
  styleUrls: ['./warmup.component.scss'],
})
export class WarmupComponent implements OnInit {
  session$: Observable<Session>;
  level: string;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    home: HomeService
  ) {
    home.setTitle('Échauffement');
  }

  ngOnInit(): void {
    this.session$ = this.profileService.getProfile().pipe(
      take(1),
      switchMap((profile) =>
        profile.preferences.jumpingRope
          ? of(sessionWithJumpingRope)
          : of(session)
      )
    );

    this.route.queryParams
      .pipe(
        filter((params) => params.level),
        take(1)
      )
      .subscribe((params) => {
        this.level = params.level;
      });
  }

  onSessionDone() {
    if (this.level) {
      this.router.navigate([`../../${this.level}`], {
        relativeTo: this.route,
      });
    }
  }
}
