import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ProfileService } from './profile.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileGuard implements CanActivate {
  constructor(private profileService: ProfileService) {}

  canActivate() {
    return this.profileService.getProfile().pipe(
      take(1),
      map((profile) => {
        return !!profile;
      })
    );
  }
}
