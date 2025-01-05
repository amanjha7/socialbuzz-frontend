import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from '../shared/components/post/post.component';
import { UsersComponent } from '../shared/components/users/users.component';
import { SettingsComponent } from '../shared/components/settings/settings.component';
import { ProfileComponent } from '../shared/components/profile/profile.component';
import { NotificationsComponent } from '../shared/components/notifications/notifications.component';
import { MessagesComponent } from '../shared/components/messages/messages.component';
import { FriendsComponent } from '../shared/components/friends/friends.component';
import { CreatePostComponent } from '../shared/components/posts/create-post/create-post.component';
import { MyPostsComponent } from '../shared/components/posts/my-posts/my-posts.component';
import { InboxComponent } from '../shared/components/messages/inbox/inbox.component';
import { SentComponent } from '../shared/components/messages/sent/sent.component';
import { ComposeComponent } from '../shared/components/messages/compose/compose.component';
import { FindFriendsComponent } from '../shared/components/friends/find-friends/find-friends.component';
import { MyFriendsComponent } from '../shared/components/friends/my-friends/my-friends.component';
import { ViewProfileComponent } from '../shared/components/profile/view-profile/view-profile.component';
import { EditProfileComponent } from '../shared/components/profile/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from '../shared/components/profile/change-password/change-password.component';
import { PrivacyComponent } from '../shared/components/settings/privacy/privacy.component';
import { SecurityComponent } from '../shared/components/settings/security/security.component';
import { AccountComponent } from '../shared/components/settings/account/account.component';
import { NotificationComponent } from '../shared/components/notification/notification.component';
import { HomeComponent } from '../shared/components/home/home.component';
import { UserSnackBarComponent } from '../shared/components/user-snack-bar/user-snack-bar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PostComponent,
    UsersComponent,
    SettingsComponent,
    ProfileComponent,
    NotificationsComponent,
    MessagesComponent,
    FriendsComponent,
    CreatePostComponent,
    MyPostsComponent,
    InboxComponent,
    SentComponent,
    ComposeComponent,
    FindFriendsComponent,
    MyFriendsComponent,
    ViewProfileComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    PrivacyComponent,
    SecurityComponent,
    AccountComponent,
    NotificationComponent,
    HomeComponent,
    UserSnackBarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
