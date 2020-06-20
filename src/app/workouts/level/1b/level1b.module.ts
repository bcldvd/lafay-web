import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Level1bRoutingModule } from './level1b-routing.module';
import { Level1bComponent } from './level1b.component';


@NgModule({
  declarations: [Level1bComponent],
  imports: [
    CommonModule,
    Level1bRoutingModule
  ]
})
export class Level1bModule { }
