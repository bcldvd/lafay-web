import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Level4Component } from './level4.component';
import { Level4RoutingModule } from './level4-routing.module';
import { WorkoutModule } from '../../cdk/workout/workout.module';
import { SessionModule } from '../../cdk/session/session.module';
import { TrainingObjectiveModule } from '../../cdk/training-objective/training-objective.module';
import { SessionPlanModule } from '../../cdk/session-plan/session-plan.module';
import { SessionDoneModule } from '../../cdk/session-done/session-done.module';
import { NextLevelModule } from '../../cdk/next-level/next-level.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [Level4Component],
  imports: [
    CommonModule,
    Level4RoutingModule,
    WorkoutModule,
    SessionModule,
    TrainingObjectiveModule,
    SessionPlanModule,
    SessionDoneModule,
    NextLevelModule,
    MatButtonModule,
  ],
})
export class Level4Module {}
