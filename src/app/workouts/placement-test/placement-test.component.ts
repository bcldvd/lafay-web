import { Component, OnInit } from '@angular/core';
import { session } from './placement-test.constants';
import { WORKOUTS_STEPS } from '../workouts.constants';

@Component({
  selector: 'app-placement-test',
  templateUrl: './placement-test.component.html',
  styleUrls: ['./placement-test.component.scss'],
})
export class PlacementTestComponent implements OnInit {
  session = session;
  STEPS = WORKOUTS_STEPS;
  currentStep: WORKOUTS_STEPS;

  constructor() {}

  ngOnInit(): void {
    // this.currentStep = WORKOUTS_STEPS.SESSION_PLAN;
    this.currentStep = WORKOUTS_STEPS.SESSION;
  }

  previousStep() {
    this.currentStep--;
  }

  nextStep() {
    this.currentStep++;
  }

  onSessionDone() {
    /* if (this.level) {
      this.router.navigate([`../../${this.level}`], {
        relativeTo: this.route,
      });
    } */
  }
}
