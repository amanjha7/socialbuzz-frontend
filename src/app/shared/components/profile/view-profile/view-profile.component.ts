import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  userProfile: any = null;
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getMyProfile();
  }

  // Call the service method to fetch the current user's profile
  getMyProfile(): void {
    this.userService.getMyProfile().subscribe(
      (profileData) => {
        this.userProfile = profileData;
        console.log(this.userProfile);
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Error loading profile';
        this.loading = false;
      }
    );
  }
}
