import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Level2RoutingModule } from './level2-routing.module';
import { Level2Component } from './level2.component';


@NgModule({
  declarations: [Level2Component],
  imports: [
    CommonModule,
    Level2RoutingModule
  ]
})
export class Level2Module { }
