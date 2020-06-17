import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementTestRoutingModule } from './placement-test-routing.module';
import { PlacementTestComponent } from './placement-test.component';
import { SessionPlanModule } from '../session-plan/session-plan.module';
import { MatIconModule } from '@angular/material/icon';
import { SessionModule } from '../session/session.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PlacementTestComponent],
  imports: [
    CommonModule,
    PlacementTestRoutingModule,
    SessionPlanModule,
    SessionModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class PlacementTestModule {}
