import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-level',
  templateUrl: './next-level.component.html',
  styleUrls: ['./next-level.component.scss'],
})
export class NextLevelComponent implements OnInit {
  @Input() level: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  acknowledgeNewLevel() {
    this.router.navigate(['/']);
  }
}
