import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Level3Component } from './level3.component';
import { WorkoutModule } from '../../cdk/workout/workout.module';
import { SessionModule } from '../../cdk/session/session.module';
import { SessionPlanModule } from '../../cdk/session-plan/session-plan.module';
import { SessionDoneModule } from '../../cdk/session-done/session-done.module';
import { NextLevelModule } from '../../cdk/next-level/next-level.module';
import { Level3RoutingModule } from './level3-routing.module';
import { TrainingObjectiveModule } from '../../cdk/training-objective/training-objective.module';

@NgModule({
  declarations: [Level3Component],
  imports: [
    CommonModule,
    Level3RoutingModule,
    WorkoutModule,
    SessionModule,
    TrainingObjectiveModule,
    SessionPlanModule,
    SessionDoneModule,
    NextLevelModule,
  ],
})
export class Level3Module {}
