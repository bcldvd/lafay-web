import { Component, OnInit } from '@angular/core';
import { session, sessionWithJumpingRope } from './warmup.constants';
import { ProfileService } from 'src/app/profile/profile.service';
import { take } from 'rxjs/operators';
import { Session } from '../session-plan/session.interface';

@Component({
  selector: 'app-warmup',
  templateUrl: './warmup.component.html',
  styleUrls: ['./warmup.component.scss'],
})
export class WarmupComponent implements OnInit {
  session: Session;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService
      .getProfile()
      .pipe(take(1))
      .subscribe(
        (profile) =>
          (this.session = profile.preferences.jumpingRope
            ? sessionWithJumpingRope
            : session)
      );
  }
}
