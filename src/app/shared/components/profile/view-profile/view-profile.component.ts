import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  followers: any[] = [];
  following: any[] = [];
  loadingFollowers: boolean = false;
  loadingFollowing: boolean = false;
  errorFollowers: string = '';
  errorFollowing: string = '';
  showFollowing: boolean = false;
  showFollowers: boolean = false;
  popoverStyles = {
    followers: {},
    following: {},
  };

  @ViewChild('followersRef', { static: false }) followersRef!: ElementRef;
  @ViewChild('followingRef', { static: false }) followingRef!: ElementRef;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getMyProfile();
  }

  getMyProfile(): void {
    this.loading = true;
    this.userService.getMyProfile().subscribe(
      (profileData) => {
        this.userProfile = profileData;
        this.loading = false;
        this.getFollowers();
        this.getFollowing();
      },
      (error) => {
        this.errorMessage = 'Error loading profile';
        this.loading = false;
      }
    );
  }

  getFollowers(): void {
    this.loadingFollowers = true;
    this.userService.getFollowers().subscribe(
      (followers) => {
        this.followers = followers;
        this.loadingFollowers = false;
      },
      (error) => {
        this.errorFollowers = 'Error loading followers';
        this.loadingFollowers = false;
      }
    );
  }

  getFollowing(): void {
    this.loadingFollowing = true;
    this.userService.getFollowing().subscribe(
      (following) => {
        this.following = following;
        this.loadingFollowing = false;
      },
      (error) => {
        this.errorFollowing = 'Error loading following';
        this.loadingFollowing = false;
      }
    );
  }

  togglePopover(type: string, event: MouseEvent): void {
    const target = type === 'followers' ? this.followersRef : this.followingRef;

    if (type === 'followers') {
      this.showFollowers = !this.showFollowers;
      this.showFollowing = false;
    } else {
      this.showFollowing = !this.showFollowing;
      this.showFollowers = false;
    }

    const rect = target.nativeElement.getBoundingClientRect();
    const top = rect.top + window.scrollY + rect.height + 5; // Adjust for positioning below the element
    const left = rect.left + window.scrollX;

    (this.popoverStyles as any)[type] = {
      top: `${top}px`,
      left: `${left}px`,
      position: 'absolute',
    };
  }
}
