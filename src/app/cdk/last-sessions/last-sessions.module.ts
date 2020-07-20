import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastSessionsComponent } from './last-sessions.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const components = [LastSessionsComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, MatCardModule, RouterModule, MatButtonModule],
})
export class LastSessionsComponentsModule {}
