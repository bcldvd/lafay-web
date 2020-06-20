import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementTestRoutingModule } from './placement-test-routing.module';
import { PlacementTestComponent } from './placement-test.component';
import { SessionPlanModule } from '../cdk/session-plan/session-plan.module';
import { MatIconModule } from '@angular/material/icon';
import { SessionModule } from '../cdk/session/session.module';
import { MatButtonModule } from '@angular/material/button';
import { NextLevelModule } from '../cdk/next-level/next-level.module';
import { WorkoutModule } from '../cdk/workout/workout.module';
import { SessionDoneModule } from '../cdk/session-done/session-done.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PlacementTestComponent],
  imports: [
    CommonModule,
    PlacementTestRoutingModule,
    SessionPlanModule,
    SessionModule,
    MatIconModule,
    MatButtonModule,
    NextLevelModule,
    WorkoutModule,
    SessionDoneModule,
    MatCardModule,
  ],
})
export class PlacementTestModule {}
