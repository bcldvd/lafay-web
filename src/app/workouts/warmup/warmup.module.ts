import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarmupRoutingModule } from './warmup-routing.module';
import { WarmupComponent } from './warmup.component';


@NgModule({
  declarations: [WarmupComponent],
  imports: [
    CommonModule,
    WarmupRoutingModule
  ]
})
export class WarmupModule { }
