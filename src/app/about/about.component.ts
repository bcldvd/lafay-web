import { Component, OnInit } from '@angular/core';
import { GITHUB_REPO, LAFAY_AMZN_LINK } from '../app.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  githubRepo = GITHUB_REPO;
  linkAmazon = LAFAY_AMZN_LINK;

  constructor() {}

  ngOnInit(): void {}
}
