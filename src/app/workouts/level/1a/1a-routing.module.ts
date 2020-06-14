import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Level1aComponent } from './1a.component';

const routes: Routes = [
  {
    path: '',
    component: Level1aComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level1aRoutingModule {}
