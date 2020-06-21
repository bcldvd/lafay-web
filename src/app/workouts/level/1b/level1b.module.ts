import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Level1bRoutingModule } from './level1b-routing.module';
import { Level1bComponent } from './level1b.component';
import { WorkoutModule } from '../../cdk/workout/workout.module';
import { SessionModule } from '../../cdk/session/session.module';
import { MatCardModule } from '@angular/material/card';
import { SessionPlanModule } from '../../cdk/session-plan/session-plan.module';
import { SessionDoneModule } from '../../cdk/session-done/session-done.module';
import { NextLevelModule } from '../../cdk/next-level/next-level.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [Level1bComponent],
  imports: [
    CommonModule,
    Level1bRoutingModule,
    WorkoutModule,
    SessionModule,
    MatCardModule,
    SessionPlanModule,
    SessionDoneModule,
    NextLevelModule,
    MatButtonModule,
  ],
})
export class Level1bModule {}
