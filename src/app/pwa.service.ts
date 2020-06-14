import { Platform } from '@angular/cdk/platform';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PwaPromptComponent } from './pwa-prompt/pwa-prompt.component';

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  private promptEvent: any;

  constructor(
    private bottomSheet: MatBottomSheet,
    private platform: Platform
  ) {}

  public initPwaPrompt() {
    if (this.platform.IOS) {
      const isInStandaloneMode =
        'standalone' in window.navigator && window.navigator['standalone'];
      if (!isInStandaloneMode) {
        this.openPromptComponent('ios');
      }
    } else if (
      this.platform.ANDROID ||
      this.platform.EDGE ||
      this.platform.BLINK
    ) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
        this.openPromptComponent('android');
      });
    }
  }

  private openPromptComponent(mobileType: 'ios' | 'android') {
    timer(3000)
      .pipe(take(1))
      .subscribe(() =>
        this.bottomSheet.open(PwaPromptComponent, {
          data: { mobileType, promptEvent: this.promptEvent },
        })
      );
  }
}
