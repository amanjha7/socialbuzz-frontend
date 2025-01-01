import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  showToast: boolean = false;
  message: string = '';

  showSuccess(message: string): void {
    this.message = message;
    this.showToast = true;
    setTimeout(() => this.hideToast(), 3000); // Hide toast after 3 seconds
  }

  hideToast(): void {
    this.showToast = false;
  }
}
