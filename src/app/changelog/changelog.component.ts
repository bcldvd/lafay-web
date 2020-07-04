import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { changelog } from './changelog.constants';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
})
export class ChangelogComponent implements OnInit {
  changelog = changelog;

  constructor(home: HomeService) {
    home.setTitle('Notes de version');
  }

  ngOnInit(): void {}
}
