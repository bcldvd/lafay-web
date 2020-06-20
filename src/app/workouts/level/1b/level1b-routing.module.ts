import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level1bComponent } from './level1b.component';

const routes: Routes = [{ path: '', component: Level1bComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Level1bRoutingModule { }
