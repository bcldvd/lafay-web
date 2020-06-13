import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async logout() {
    await this.auth.logout();
    this.router.navigate(['login']);
  }
}
