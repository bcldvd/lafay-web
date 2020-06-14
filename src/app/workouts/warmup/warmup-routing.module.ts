import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarmupComponent } from './warmup.component';

const routes: Routes = [{ path: '', component: WarmupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarmupRoutingModule { }
