import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  @Output() changed = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onChange(event: MatButtonToggleChange) {
    const value = event.value === 'true';
    this.changed.emit(value);
  }
}
