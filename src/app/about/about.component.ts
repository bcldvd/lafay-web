import { Component, OnInit } from '@angular/core';
import { GITHUB_REPO, LAFAY_AMZN_LINK } from '../app.constants';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  githubRepo = GITHUB_REPO;
  linkAmazon = LAFAY_AMZN_LINK;

  constructor(home: HomeService) {
    home.setTitle('À Propos');
  }

  ngOnInit(): void {}
}
