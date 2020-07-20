import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from '../workouts/workouts.interfaces';
import { WorkoutsService } from '../workouts/workouts.service';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-last-sessions-feature',
  templateUrl: './last-sessions.component.html',
  styleUrls: ['./last-sessions.component.scss'],
})
export class LastSessionsComponent implements OnInit {
  workouts$: Observable<Workout[]>;

  constructor(private workoutsService: WorkoutsService, home: HomeService) {
    home.setTitle('Mes dernières séances');
  }

  ngOnInit(): void {
    this.workouts$ = this.workoutsService.getWorkouts();
  }
}
