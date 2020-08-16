import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TrainingObjectiveComponent } from './training-objective.component';
import { MatButtonModule } from '@angular/material/button';

const components = [TrainingObjectiveComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class TrainingObjectiveModule {}
