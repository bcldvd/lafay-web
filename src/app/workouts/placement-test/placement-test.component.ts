import { Component, OnInit } from '@angular/core';
import { session, level } from './placement-test.constants';
import { Session } from '../workouts.interfaces';
import { ProfileService } from 'src/app/profile/profile.service';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-placement-test',
  templateUrl: './placement-test.component.html',
  styleUrls: ['./placement-test.component.scss'],
})
export class PlacementTestComponent implements OnInit {
  session = session;
  level = level;
  newLevel: string;

  constructor(private profileService: ProfileService, home: HomeService) {
    home.setTitle(this.level);
  }

  ngOnInit(): void {}

  decideLevel(effectiveSession: Session) {
    this.newLevel = this.decideNewLevel(effectiveSession);
    this.profileService.updateLevel(this.newLevel);
  }

  private decideNewLevel(effectiveSession: Session) {
    let newLevel: string;
    const respB = effectiveSession[1].effective[0];

    if (respB < 5) {
      newLevel = '1a';
    } else if (respB < 8) {
      newLevel = '1b';
    } else {
      newLevel = '2';
    }

    return newLevel;
  }
}
