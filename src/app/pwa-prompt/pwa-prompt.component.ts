import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-pwa-prompt',
  templateUrl: './pwa-prompt.component.html',
  styleUrls: ['./pwa-prompt.component.scss'],
})
export class PwaPromptComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: { mobileType: 'ios' | 'android'; promptEvent?: any },
    private bottomSheetRef: MatBottomSheetRef<PwaPromptComponent>
  ) {}

  installPwa(): void {
    this.data.promptEvent.prompt();
    this.close();
  }

  close($event?: Event) {
    this.bottomSheetRef.dismiss();
    if ($event) {
      $event.preventDefault();
    }
  }
}
