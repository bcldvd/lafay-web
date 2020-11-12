import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastSessionsComponent } from './last-sessions.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

const components = [LastSessionsComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class LastSessionsComponentsModule {}
