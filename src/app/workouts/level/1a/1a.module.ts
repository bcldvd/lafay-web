import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Level1aRoutingModule } from './1a-routing.module';
import { Level1aComponent } from './1a.component';
import { WorkoutModule } from '../../cdk/workout/workout.module';
import { SessionPlanModule } from '../../cdk/session-plan/session-plan.module';
import { MatButtonModule } from '@angular/material/button';
import { SessionModule } from '../../cdk/session/session.module';
import { SessionDoneModule } from '../../cdk/session-done/session-done.module';
import { MatCardModule } from '@angular/material/card';
import { NextLevelModule } from '../../cdk/next-level/next-level.module';

@NgModule({
  declarations: [Level1aComponent],
  imports: [
    CommonModule,
    Level1aRoutingModule,
    WorkoutModule,
    SessionPlanModule,
    MatButtonModule,
    SessionModule,
    SessionDoneModule,
    MatCardModule,
    NextLevelModule,
  ],
})
export class Level1aModule {}
