import { Component, OnInit } from '@angular/core';
import { GITHUB_REPO } from '../app.constants';
import { ProfileService } from '../profile/profile.service';
import { take } from 'rxjs/operators';
import { UserProfile } from '../profile/profile.interfaces';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent implements OnInit {
  githubRepo = GITHUB_REPO;
  profile: UserProfile;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.profileService
      .getProfile()
      .pipe(take(1))
      .subscribe((profile) => (this.profile = profile));
  }

  start() {
    const navigateTo = this.profile ? 'warmup' : 'setup';
    this.router.navigate([`${navigateTo}`], { relativeTo: this.route });
  }
}
