import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Level2RoutingModule } from './level2-routing.module';
import { Level2Component } from './level2.component';
import { WorkoutModule } from '../../cdk/workout/workout.module';
import { SessionModule } from '../../cdk/session/session.module';
import { SessionPlanModule } from '../../cdk/session-plan/session-plan.module';
import { SessionDoneModule } from '../../cdk/session-done/session-done.module';
import { NextLevelModule } from '../../cdk/next-level/next-level.module';
import { TrainingObjectiveModule } from '../../cdk/training-objective/training-objective.module';

@NgModule({
  declarations: [Level2Component],
  imports: [
    CommonModule,
    Level2RoutingModule,
    WorkoutModule,
    SessionModule,
    TrainingObjectiveModule,
    SessionPlanModule,
    SessionDoneModule,
    NextLevelModule,
  ],
})
export class Level2Module {}
