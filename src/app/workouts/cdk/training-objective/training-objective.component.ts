import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-training-objective',
  templateUrl: './training-objective.component.html',
  styleUrls: ['./training-objective.component.scss'],
})
export class TrainingObjectiveComponent implements OnInit {
  @Output() go = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
