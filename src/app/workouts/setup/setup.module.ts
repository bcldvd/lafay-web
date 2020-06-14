import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';
import { MatButtonModule } from '@angular/material/button';
import { Step2Component } from './step2/step2.component';
import { StepDoneComponent } from './step-done/step-done.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [SetupComponent, Step2Component, StepDoneComponent],
  imports: [
    CommonModule,
    SetupRoutingModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class SetupModule {}
