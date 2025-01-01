import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  userProfile: any = {
    username: '',
    email: '',
    bio: '',
    profile_picture: ''
  };


  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getMyProfile().subscribe(
      (response) => {
        this.userProfile = response;
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }
  

  onSubmit(): void {
    this.userService.updateUserProfile(this.userProfile).subscribe(
      (response) => {
        console.log('Profile updated successfully', response);
      },
      (error) => {
        console.error('Error updating profile:', error);
      }
    );
  }
}
