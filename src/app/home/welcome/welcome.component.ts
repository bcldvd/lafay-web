import { Component, OnInit } from '@angular/core';
import { WorkoutsService } from '../../workouts/workouts.service';
import { Observable } from 'rxjs';
import { Workout } from 'src/app/workouts/workouts.interfaces';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  sessions$: Observable<Workout[]>;

  constructor(
    private workoutsService: WorkoutsService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.sessions$ = this.workoutsService.getWorkouts();
  }
}
