import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Workout } from 'src/app/workouts/workouts.interfaces';
import { SessionService } from 'src/app/workouts/cdk/session/session.service';
import { WorkoutsService } from 'src/app/workouts/workouts.service';

@Component({
  selector: 'app-last-sessions',
  templateUrl: './last-sessions.component.html',
  styleUrls: ['./last-sessions.component.scss'],
})
export class LastSessionsComponent implements OnInit, OnChanges {
  @Input() workouts: Workout[];
  @Input() limit: number;
  @Input() showMenu = false;

  constructor(
    private sessionService: SessionService,
    private workoutsService: WorkoutsService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.workouts) {
      this.workouts = this.workouts.map((workout) => {
        workout.exercises = this.sessionService.mapSession(workout.exercises);
        return workout;
      });
    }
  }

  delete(workoutId: string) {
    return this.workoutsService.deleteWorkout(workoutId);
  }
}
