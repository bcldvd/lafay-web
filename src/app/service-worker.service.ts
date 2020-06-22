import { ApplicationRef, Injectable, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval, NEVER, Observable, Subject, timer } from 'rxjs';
import { first, map, takeUntil, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceWorkerService implements OnDestroy {
  private checkInterval = 1000 * 60 * 60 * 6; // 6 hours
  private onDestroy = new Subject();
  updateActivated: Observable<string>;

  constructor(appRef: ApplicationRef, private swu: SwUpdate, sb: MatSnackBar) {
    if (!swu.isEnabled) {
      this.updateActivated = NEVER.pipe(takeUntil(this.onDestroy));
      return;
    }

    const appIsStable = appRef.isStable.pipe(first((v) => v));
    concat(appIsStable, interval(this.checkInterval))
      .pipe(
        tap(() => this.log('Checking for update...')),
        takeUntil(this.onDestroy)
      )
      .subscribe(() => {
        this.swu.checkForUpdate();
      });

    this.swu.available
      .pipe(
        tap((evt) => this.log(`Update available: ${JSON.stringify(evt)}`)),
        takeUntil(this.onDestroy)
      )
      .subscribe(() => {
        const sbRef = sb.open(
          'Une nouvelle version est disponible',
          'Mettre à jour'
        );
        sbRef.onAction().subscribe(() => this.swu.activateUpdate());
      });

    this.updateActivated = this.swu.activated.pipe(
      tap((evt) => this.log(`Update activated: ${JSON.stringify(evt)}`)),
      map((event) => event.current.hash),
      takeUntil(this.onDestroy)
    );
  }

  ngOnDestroy() {
    this.onDestroy.next();
  }

  private log(message: string) {
    const timestamp = new Date().toISOString();
    console.log(`[ServiceWorker - ${timestamp}]: ${message}`);
  }
}
