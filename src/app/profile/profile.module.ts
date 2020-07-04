import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {
  ProfileComponent,
  DialogLevelChangeComponent,
} from './profile.component';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

const components = [ProfileComponent, DialogLevelChangeComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatListModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
  ],
})
export class ProfileModule {}
