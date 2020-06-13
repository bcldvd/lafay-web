import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LastSessionsComponent } from './last-sessions.component';

const routes: Routes = [
  {
    path: '',
    component: LastSessionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastSessionsRoutingModule {}
