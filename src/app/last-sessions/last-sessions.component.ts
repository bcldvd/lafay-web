import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from '../workouts/workouts.interfaces';
import { WorkoutsService } from '../workouts/workouts.service';

@Component({
  selector: 'app-last-sessions',
  templateUrl: './last-sessions.component.html',
  styleUrls: ['./last-sessions.component.scss'],
})
export class LastSessionsComponent implements OnInit {
  sessions$: Observable<Workout[]>;

  constructor(private workoutsService: WorkoutsService) {}

  ngOnInit(): void {
    this.sessions$ = this.workoutsService.getWorkouts();
  }
}
