import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { filter, switchMap, map, take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserProfile, UserPreferences } from './profile.interfaces';

const collectionName = 'users';
const ownerIdPropName = 'ownerId';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  docId: string;
  guestUser: UserProfile;

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore
  ) {}

  getProfile() {
    const profile$ = this.authService.user$.pipe(
      filter((user) => user != null),
      switchMap((user) => {
        return this.afs
          .collection<UserProfile>(collectionName, (ref) =>
            ref.where(ownerIdPropName, '==', user.uid)
          )
          .valueChanges({ idField: 'docId' })
          .pipe(
            take(1),
            map((profiles) => {
              return this.guestUser || profiles[0];
            })
          );
      })
    );

    profile$
      .pipe(filter(Boolean), take(1))
      .subscribe((profile) => (this.docId = (profile as any).docId));

    return profile$;
  }

  async createProfile(preferences: UserPreferences) {
    const user = this.authService.user$.value;
    const profile = {
      preferences,
      name: user.displayName,
      memberSince: Date.now(),
      lastEdit: Date.now(),
      ownerId: user.uid,
    };
    if (user.isAnonymous) {
      this.guestUser = profile;
    } else {
      return this.afs.collection<UserProfile>(collectionName).add(profile);
    }
  }

  updatePreferences(preferences: UserPreferences) {
    this.updateProfile({ preferences });
  }

  updateLevel(level: string) {
    this.updateProfile({ level });
  }

  private updateProfile(profile: Partial<UserProfile>) {
    const user = this.authService.user$.value;
    const newProfile = {
      ...profile,
      lastEdit: Date.now(),
    };
    if (user.isAnonymous) {
      this.guestUser = {
        ...this.guestUser,
        ...newProfile,
      };
    } else {
      return this.afs
        .collection<UserProfile>(collectionName)
        .doc(this.docId)
        .update(newProfile);
    }
  }
}
