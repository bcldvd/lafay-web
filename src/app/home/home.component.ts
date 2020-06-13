import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { version } from '../../../package.json';
import { WorkoutsService } from '../workouts/workouts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  version = version;

  menu = [
    [
      {
        name: 'Accueil',
        icon: 'home',
        path: '/',
      },
      {
        name: 'Mes dernieres séances',
        icon: 'update',
        path: '/last-sessions',
      },
      {
        name: 'Mes statistiques',
        icon: 'assessment',
      },
      {
        name: 'Ma progression',
        icon: 'military_tech',
      },
    ],
    [
      {
        name: 'Communauté',
        icon: 'chat',
      },
    ],
  ];

  constructor(
    public auth: AuthService,
    private router: Router,
    private workoutsService: WorkoutsService
  ) {}

  ngOnInit(): void {}

  async logout() {
    await this.auth.logout();
    this.router.navigate(['login']);
  }

  addWorkout() {
    const workout = {
      level: 4,
    };
    this.workoutsService.addWorkout(workout);
  }
}
