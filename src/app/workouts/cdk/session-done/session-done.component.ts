import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../../workouts.interfaces';

@Component({
  selector: 'app-session-done',
  templateUrl: './session-done.component.html',
  styleUrls: ['./session-done.component.scss'],
})
export class SessionDoneComponent implements OnInit {
  @Input() session: Session;

  constructor() {}

  ngOnInit(): void {}
}
