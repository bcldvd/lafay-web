import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionSummaryComponent } from './session-summary.component';

const components = [SessionSummaryComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
})
export class SessionSummaryModule {}
