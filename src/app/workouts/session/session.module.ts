import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionComponent } from './session.component';
import { MatButtonModule } from '@angular/material/button';

const components = [SessionComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, MatButtonModule],
})
export class SessionModule {}
