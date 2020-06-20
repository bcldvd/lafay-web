import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionDoneComponent } from './session-done.component';
import { SessionSummaryModule } from '../session/session-summary/session-summary.module';

const components = [SessionDoneComponent];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, SessionSummaryModule],
})
export class SessionDoneModule {}
