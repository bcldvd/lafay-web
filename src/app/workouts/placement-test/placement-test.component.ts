import { Component, OnInit } from '@angular/core';
import { session } from './placement-test.constants';
import { WORKOUTS_STEPS } from '../workouts.constants';
import { Exercise, Session } from '../workouts.interfaces';
import { WorkoutsService } from '../workouts.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-placement-test',
  templateUrl: './placement-test.component.html',
  styleUrls: ['./placement-test.component.scss'],
})
export class PlacementTestComponent implements OnInit {
  session = session;
  STEPS = WORKOUTS_STEPS;
  currentStep: WORKOUTS_STEPS;
  level = 'Test de placement';
  newLevel: string;

  constructor(
    private workoutsService: WorkoutsService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentStep = WORKOUTS_STEPS.SESSION_PLAN;
  }

  previousStep() {
    this.currentStep--;
  }

  nextStep() {
    this.currentStep++;
  }

  onSessionDone(effectiveSession: Session) {
    this.workoutsService.addWorkout({
      level: this.level,
      exercises: effectiveSession,
    });
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

  acknowledgeNewLevel() {
    this.router.navigate(['/']);
  }
}
