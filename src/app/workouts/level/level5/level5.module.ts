import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Level5Component } from './level5.component';
import { Level5RoutingModule } from './level5-routing.module';
import { WorkoutModule } from '../../cdk/workout/workout.module';
import { SessionModule } from '../../cdk/session/session.module';
import { TrainingObjectiveModule } from '../../cdk/training-objective/training-objective.module';
import { SessionPlanModule } from '../../cdk/session-plan/session-plan.module';
import { SessionDoneModule } from '../../cdk/session-done/session-done.module';
import { NextLevelModule } from '../../cdk/next-level/next-level.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [Level5Component],
  imports: [
    CommonModule,
    Level5RoutingModule,
    WorkoutModule,
    SessionModule,
    TrainingObjectiveModule,
    SessionPlanModule,
    SessionDoneModule,
    NextLevelModule,
    MatButtonModule,
  ],
})
export class Level5Module {}
