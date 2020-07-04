import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangelogRoutingModule } from './changelog-routing.module';
import { ChangelogComponent } from './changelog.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ChangelogComponent],
  imports: [CommonModule, ChangelogRoutingModule, MatCardModule],
})
export class ChangelogModule {}
