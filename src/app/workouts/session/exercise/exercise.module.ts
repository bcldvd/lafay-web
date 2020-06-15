import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseComponent } from './exercise.component';

const components = [ExerciseComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
})
export class ExerciseModule {}
