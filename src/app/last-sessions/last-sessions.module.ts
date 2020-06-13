import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastSessionsRoutingModule } from './last-sessions-routing.module';
import { LastSessionsComponent } from './last-sessions.component';


@NgModule({
  declarations: [LastSessionsComponent],
  imports: [
    CommonModule,
    LastSessionsRoutingModule
  ]
})
export class LastSessionsModule { }
