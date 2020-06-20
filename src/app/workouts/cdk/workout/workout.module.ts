import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  WorkoutComponent,
  WorkoutPlanComponent,
  WorkoutDoingComponent,
  WorkoutDoneComponent,
  WorkoutNewLevelComponent,
} from './workout.component';

const components = [
  WorkoutComponent,
  WorkoutPlanComponent,
  WorkoutDoingComponent,
  WorkoutDoneComponent,
  WorkoutNewLevelComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
})
export class WorkoutModule {}
