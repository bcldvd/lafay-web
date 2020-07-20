import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LastSessionsComponentsModule } from 'src/app/cdk/last-sessions/last-sessions.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    LastSessionsComponentsModule,
  ],
})
export class WelcomeModule {}
