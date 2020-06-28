import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileService } from './profile.service';
import { Observable } from 'rxjs';
import { UserProfile, UserPreferences } from './profile.interfaces';
import { filter, take } from 'rxjs/operators';
import { DEFAULT_PREFERENCES } from './profile.constants';
import { UntilDestroy } from '@ngneat/until-destroy';
import { placementTestPath } from '../workouts/placement-test/placement-test.constants';
import { WebNotificationService } from '../web-notification.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  formGroup: FormGroup;
  profile$: Observable<UserProfile>;
  PLACEMENT_TEST = placementTestPath;

  constructor(
    public auth: AuthService,
    formBuilder: FormBuilder,
    private profileService: ProfileService,
    private webNotification: WebNotificationService
  ) {
    this.formGroup = formBuilder.group(DEFAULT_PREFERENCES);
    this.formGroup.disable();
  }

  ngOnInit(): void {
    this.profile$ = this.profileService
      .getProfile()
      .pipe(filter(Boolean)) as Observable<UserProfile>;
    this.profile$.pipe(take(1)).subscribe((profile) => {
      this.formGroup.enable();
      this.formGroup.patchValue(profile.preferences);
    });
    this.formGroup.valueChanges.subscribe((preferences: UserPreferences) => {
      if (
        !this.webNotification.subscription$.value &&
        preferences.notifications
      ) {
        this.webNotification.subscribe();
      }
      this.profileService.updatePreferences(preferences);
    });
  }
}
