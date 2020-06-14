import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementTestRoutingModule } from './placement-test-routing.module';
import { PlacementTestComponent } from './placement-test.component';


@NgModule({
  declarations: [PlacementTestComponent],
  imports: [
    CommonModule,
    PlacementTestRoutingModule
  ]
})
export class PlacementTestModule { }
