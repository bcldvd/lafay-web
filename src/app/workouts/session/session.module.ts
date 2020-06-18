import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionComponent } from './session.component';
import { MatButtonModule } from '@angular/material/button';
import { CountdownModule } from 'ngx-countdown';

import { WorkoutCountdownComponent } from './countdown/countdown.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SessionSummaryModule } from './session-summary/session-summary.module';

const components = [SessionComponent, WorkoutCountdownComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    MatButtonModule,
    CountdownModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressBarModule,
    SessionSummaryModule,
  ],
})
export class SessionModule {}
