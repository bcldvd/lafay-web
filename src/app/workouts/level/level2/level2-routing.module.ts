import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level2Component } from './level2.component';

const routes: Routes = [{ path: '', component: Level2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Level2RoutingModule { }
