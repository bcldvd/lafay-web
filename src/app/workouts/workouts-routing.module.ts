import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutsComponent } from './workouts.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutsComponent,
  },
  {
    path: 'setup',
    loadChildren: () =>
      import('./setup/setup.module').then((m) => m.SetupModule),
  },
  {
    path: 'warmup',
    loadChildren: () =>
      import('./warmup/warmup.module').then((m) => m.WarmupModule),
  },
  {
    path: 'placement-test',
    loadChildren: () =>
      import('./placement-test/placement-test.module').then(
        (m) => m.PlacementTestModule
      ),
  },
  {
    path: '1a',
    loadChildren: () =>
      import('./level/1a/1a.module').then((m) => m.Level1aModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutsRoutingModule {}
