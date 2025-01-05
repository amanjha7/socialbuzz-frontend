import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  isOldPasswordVisible: boolean = false;
  isNewPasswordVisible: boolean = false;
  isConfirmPasswordVisible: boolean = false;

  constructor(private authService: AuthService) { }

  //toggle password visibility
  togglePasswordVisibility(type: string) {
    switch(type) {
      case 'old':
        this.isOldPasswordVisible = !this.isOldPasswordVisible;
        break;
      case 'new':
        this.isNewPasswordVisible = !this.isNewPasswordVisible;
        break;
      case 'confirm':
        this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
        break;
    }
  }

  // change password
  changePassword() {
    if(this.oldPassword === '' || this.newPassword === '' || this.confirmPassword === '') {
      this.successMessage = '';
      this.errorMessage = 'All fields are required';
      return;
    }
    if(this.newPassword !== this.confirmPassword) {
      this.successMessage = '';
      this.errorMessage = 'New password and confirm password do not match';
      return;
    }
    if(this.newPassword === this.oldPassword) {
      this.successMessage = '';
      this.errorMessage = 'New password cannot be same as old password';
      return;
    }
    if (this.confirmPassword === this.newPassword) {
      this.authService.changePassword({ oldPassword: this.oldPassword, newPassword: this.newPassword }).subscribe(
        (response) => {
          console.log('Password changed successfully', response);
          this.errorMessage = '';
          this.successMessage = 'Password changed successfully';
        },
        (error) => {
          console.error('Error changing password:', error);
          this.successMessage = '';
          this.errorMessage = 'Error changing password';
        }
      )
    } else {
      this.successMessage = '';
      this.errorMessage = 'New password and confirm password do not match';
    }
  }
}
