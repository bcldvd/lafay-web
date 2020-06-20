import { Component, OnInit, Input } from '@angular/core';
import { UserPreferences } from '../../../profile/profile.interfaces';
import { ProfileService } from '../../../profile/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { placementTestPath } from '../../placement-test/placement-test.constants';

@Component({
  selector: 'app-step-done',
  templateUrl: './step-done.component.html',
  styleUrls: ['./step-done.component.scss'],
})
export class StepDoneComponent implements OnInit {
  @Input() preferences: UserPreferences;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  async hot() {
    await this.profileService.createProfile(this.preferences);
    this.router.navigate(['../../warmup'], {
      relativeTo: this.route,
      queryParams: { level: placementTestPath },
    });
  }
}
