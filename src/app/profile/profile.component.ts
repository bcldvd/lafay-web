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
import { HomeService } from '../home/home.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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
  newLevel: string;

  constructor(
    public auth: AuthService,
    formBuilder: FormBuilder,
    private profileService: ProfileService,
    private webNotification: WebNotificationService,
    home: HomeService,
    public dialog: MatDialog
  ) {
    this.formGroup = formBuilder.group(DEFAULT_PREFERENCES);
    this.formGroup.disable();
    home.setTitle('Profil');
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

  openDialog() {
    const dialogRef = this.dialog.open(DialogLevelChangeComponent, {});

    dialogRef.afterClosed().subscribe((newLevel) => {
      if (newLevel) {
        this.profileService.updateLevel(newLevel);
        this.newLevel = newLevel;
      }
    });
  }
}

@Component({
  selector: 'app-dialog-level-change',
  templateUrl: 'dialog-level-change.html',
})
export class DialogLevelChangeComponent {
  selectedValue: string;

  levels = [
    {
      value: placementTestPath,
      viewValue: 'Test de placement',
    },
    {
      value: '1a',
      viewValue: 'Niveau 1a',
    },
    {
      value: '1b',
      viewValue: 'Niveau 1b',
    },
    {
      value: '2',
      viewValue: 'Niveau 2',
    },
    {
      value: '3',
      viewValue: 'Niveau 3',
    },
    {
      value: '4',
      viewValue: 'Niveau 4',
    },
    {
      value: '5',
      viewValue: 'Niveau 5',
    },
  ];

  constructor(public dialogRef: MatDialogRef<DialogLevelChangeComponent>) {}
}
