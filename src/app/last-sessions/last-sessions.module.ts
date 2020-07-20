import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastSessionsRoutingModule } from './last-sessions-routing.module';
import { LastSessionsComponent } from './last-sessions.component';
import { LastSessionsComponentsModule } from '../cdk/last-sessions/last-sessions.module';

@NgModule({
  declarations: [LastSessionsComponent],
  imports: [
    CommonModule,
    LastSessionsRoutingModule,
    LastSessionsComponentsModule,
  ],
})
export class LastSessionsModule {}
