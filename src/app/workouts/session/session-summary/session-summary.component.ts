import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../session.service';
import { Session } from '../../workouts.interfaces';

@Component({
  selector: 'app-session-summary',
  templateUrl: './session-summary.component.html',
  styleUrls: ['./session-summary.component.scss'],
})
export class SessionSummaryComponent implements OnInit {
  @Input() session: Session;

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {}
}
