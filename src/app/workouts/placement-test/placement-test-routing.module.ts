import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacementTestComponent } from './placement-test.component';

const routes: Routes = [{ path: '', component: PlacementTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacementTestRoutingModule { }
