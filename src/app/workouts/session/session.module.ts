import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionComponent } from './session.component';
import { MatButtonModule } from '@angular/material/button';
import { CountdownModule } from 'ngx-countdown';

import { WorkoutCountdownComponent } from './countdown/countdown.component';

const components = [SessionComponent, WorkoutCountdownComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, MatButtonModule, CountdownModule],
})
export class SessionModule {}
