import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutsRoutingModule } from './workouts-routing.module';
import { WorkoutsComponent } from './workouts.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WorkoutsComponent],
  imports: [CommonModule, WorkoutsRoutingModule, MatButtonModule],
})
export class WorkoutsModule {}
