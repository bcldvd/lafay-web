import { Component, OnInit } from '@angular/core';
import { UserPreferences } from '../../profile/profile.interfaces';
import { DEFAULT_PREFERENCES } from '../../profile/profile.constants';
import { STEPS, stepsMeta } from './setup.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent implements OnInit {
  preferences: UserPreferences = DEFAULT_PREFERENCES;
  currentStep: STEPS;
  steps = STEPS;
  stepsMeta = stepsMeta;
  nbSteps = Object.keys(stepsMeta).length;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentStep = STEPS.EQUIPMENT;
  }

  step2Change(value: boolean) {
    this.preferences.jumpingRope = value;
    this.stepsMeta[STEPS.EQUIPMENT].validity = true;
  }

  previousStep() {
    if (this.currentStep === STEPS.EQUIPMENT) {
      this.router.navigate(['/level']);
    }
    this.currentStep--;
  }

  nextStep() {
    this.currentStep++;
  }
}
