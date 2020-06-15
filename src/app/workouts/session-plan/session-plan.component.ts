import { Component, OnInit, Input, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Session, Exercise } from '../workouts.interfaces';
import { EXERCISES_IMAGE_PATH } from '../../../app/app.constants';

@Component({
  selector: 'app-session-plan',
  templateUrl: './session-plan.component.html',
  styleUrls: ['./session-plan.component.scss'],
})
export class SessionPlanComponent implements OnInit {
  @Input() session: Session;

  constructor(public dialog: MatDialog) {}

  openDialog(exercise) {
    this.dialog.open(DialogExerciseInfoComponent, {
      data: exercise,
    });
  }

  ngOnInit(): void {
    this.session = this.session.map((exercise) => {
      exercise.image = `${EXERCISES_IMAGE_PATH}/${exercise.name}.png`;
      exercise.imageFull = `${EXERCISES_IMAGE_PATH}/${exercise.name}-full.png`;
      return exercise;
    });
  }
}

@Component({
  selector: 'app-dialog-exercise-info',
  templateUrl: 'dialog-exercise-info.html',
})
export class DialogExerciseInfoComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogExerciseInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Exercise
  ) {}
}
