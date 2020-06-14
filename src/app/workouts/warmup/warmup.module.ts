import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarmupRoutingModule } from './warmup-routing.module';
import { WarmupComponent } from './warmup.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SessionPlanComponent } from '../session-plan/session-plan.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [WarmupComponent, SessionPlanComponent],
  imports: [
    CommonModule,
    WarmupRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class WarmupModule {}
