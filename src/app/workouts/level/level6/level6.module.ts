import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Level6Component } from './level6.component';
import { Level6RoutingModule } from './level6-routing.module';
import { WorkoutModule } from '../../cdk/workout/workout.module';
import { SessionModule } from '../../cdk/session/session.module';
import { TrainingObjectiveModule } from '../../cdk/training-objective/training-objective.module';
import { SessionPlanModule } from '../../cdk/session-plan/session-plan.module';
import { SessionDoneModule } from '../../cdk/session-done/session-done.module';
import { NextLevelModule } from '../../cdk/next-level/next-level.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [Level6Component],
  imports: [
    CommonModule,
    Level6RoutingModule,
    WorkoutModule,
    SessionModule,
    TrainingObjectiveModule,
    SessionPlanModule,
    SessionDoneModule,
    NextLevelModule,
    MatButtonModule,
  ],
})
export class Level6Module {}
