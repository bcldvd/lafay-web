import { Component, OnInit } from '@angular/core';
import { session } from './warmup.constants';

@Component({
  selector: 'app-warmup',
  templateUrl: './warmup.component.html',
  styleUrls: ['./warmup.component.scss'],
})
export class WarmupComponent implements OnInit {
  session = session;

  constructor() {}

  ngOnInit(): void {}
}
