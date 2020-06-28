import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageWLoaderComponent } from './image-w-loader.component';

@NgModule({
  declarations: [ImageWLoaderComponent],
  exports: [ImageWLoaderComponent],
  imports: [CommonModule],
})
export class ImageWLoaderModule {}
