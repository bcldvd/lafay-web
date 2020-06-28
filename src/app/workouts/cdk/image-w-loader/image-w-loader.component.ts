import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-image-w-loader',
  templateUrl: './image-w-loader.component.html',
  styleUrls: ['./image-w-loader.component.scss'],
})
export class ImageWLoaderComponent {
  @Input() image: string;

  @HostBinding('class.loading')
  isLoading = true;

  hideLoader() {
    this.isLoading = false;
  }
}
