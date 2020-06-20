import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarmupRoutingModule } from './warmup-routing.module';
import { WarmupComponent } from './warmup.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SessionModule } from '../cdk/session/session.module';
import { SessionPlanModule } from '../cdk/session-plan/session-plan.module';
import { WorkoutModule } from '../cdk/workout/workout.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [WarmupComponent],
  imports: [
    CommonModule,
    WarmupRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    SessionModule,
    SessionPlanModule,
    WorkoutModule,
    MatCardModule,
  ],
})
export class WarmupModule {}
