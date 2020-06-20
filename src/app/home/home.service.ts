import { Injectable } from '@angular/core';
import { filter, switchMap, map, take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  title$ = new BehaviorSubject<string>(null);

  constructor(router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.title$.next(null);
      });
  }

  setLevel(level: string) {
    const title = `Niveau ${level}`;
    this.setTitle(title);
  }

  setTitle(title: string) {
    this.title$.next(title);
  }
}
