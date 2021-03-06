import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import {
  SessionPlanComponent,
  DialogExerciseInfoComponent,
} from './session-plan.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ImageWLoaderModule } from '../image-w-loader/image-w-loader.module';

const components = [SessionPlanComponent, DialogExerciseInfoComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    ImageWLoaderModule,
  ],
})
export class SessionPlanModule {}
