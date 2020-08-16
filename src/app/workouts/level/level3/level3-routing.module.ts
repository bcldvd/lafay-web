import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Level3Component } from './level3.component';

const routes: Routes = [{ path: '', component: Level3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level3RoutingModule {}
