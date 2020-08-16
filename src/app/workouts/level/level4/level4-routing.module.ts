import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Level4Component } from './level4.component';

const routes: Routes = [{ path: '', component: Level4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level4RoutingModule {}
