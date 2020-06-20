import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NextLevelComponent } from './next-level.component';
import { MatButtonModule } from '@angular/material/button';

const components = [NextLevelComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, MatButtonModule],
})
export class NextLevelModule {}
