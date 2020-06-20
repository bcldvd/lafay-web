import { Component, OnInit, Input, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Session, Exercise } from '../../workouts.interfaces';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-session-plan',
  templateUrl: './session-plan.component.html',
  styleUrls: ['./session-plan.component.scss'],
})
export class SessionPlanComponent implements OnInit {
  @Input() session: Session;

  constructor(
    public dialog: MatDialog,
    private sessionService: SessionService
  ) {}

  openDialog(exercise: Exercise) {
    this.dialog.open(DialogExerciseInfoComponent, {
      data: exercise,
      maxWidth: '98vw',
      panelClass: 'full-width-dialog',
    });
  }

  ngOnInit(): void {
    this.session = this.sessionService.mapSession(this.session);
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
