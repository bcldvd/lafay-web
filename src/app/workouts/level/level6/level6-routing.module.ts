import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Level6Component } from './level6.component';

const routes: Routes = [{ path: '', component: Level6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level6RoutingModule {}
