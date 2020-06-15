import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarmupRoutingModule } from './warmup-routing.module';
import { WarmupComponent } from './warmup.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  SessionPlanComponent,
  DialogExerciseInfoComponent,
} from '../session-plan/session-plan.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SessionModule } from '../session/session.module';

@NgModule({
  declarations: [
    WarmupComponent,
    SessionPlanComponent,
    DialogExerciseInfoComponent,
  ],
  imports: [
    CommonModule,
    WarmupRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    SessionModule,
  ],
})
export class WarmupModule {}
