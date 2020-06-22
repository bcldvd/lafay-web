import { Component, OnInit } from '@angular/core';
import { ServiceWorkerService } from './service-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'lafay-reloaded';

  constructor(private serviceWorkerService: ServiceWorkerService) {}

  ngOnInit() {
    this.serviceWorkerService.updateActivated.subscribe(() => {
      document.location.reload();
    });
  }
}
