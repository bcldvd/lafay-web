import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { version } from '../../../package.json';
import { menu } from './home.constants';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  version = version;
  menu = menu;

  constructor(
    public auth: AuthService,
    private router: Router,
    public home: HomeService
  ) {}

  ngOnInit(): void {}

  async logout() {
    await this.auth.logout();
    this.router.navigate(['login']);
  }
}
