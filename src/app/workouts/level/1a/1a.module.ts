import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Level1aRoutingModule } from './1a-routing.module';
import { Level1aComponent } from './1a.component';

@NgModule({
  declarations: [Level1aComponent],
  imports: [CommonModule, Level1aRoutingModule],
})
export class Level1aModule {}
