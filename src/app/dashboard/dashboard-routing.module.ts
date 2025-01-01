import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component'; // DashboardComponent
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
import { PostListComponent } from '../shared/components/post-list/post-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'posts/create', component: CreatePostComponent },
      { path: 'posts/my-posts', component: MyPostsComponent },
      
      {
        path: 'messages',
        children: [
          { path: 'inbox', component: InboxComponent },
          { path: 'sent', component: SentComponent },
          { path: 'compose', component: ComposeComponent },
        ]
      },
      
      {
        path: 'friends',
        children: [
          { path: 'find', component: FindFriendsComponent },
          { path: 'my-friends', component: MyFriendsComponent },
        ]
      },
      
      {
        path: 'profile',
        children: [
          { path: 'view', component: ViewProfileComponent },
          { path: 'edit', component: EditProfileComponent },
          { path: 'change-password', component: ChangePasswordComponent },
        ]
      },
      
      {
        path: 'settings',
        children: [
          { path: 'privacy', component: PrivacyComponent },
          { path: 'security', component: SecurityComponent },
          { path: 'account', component: AccountComponent },
        ]
      },
      {
        path: 'notifications',
        component: NotificationComponent
      }, 
      {
        path: 'posts',
        component: PostListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Use forChild for feature modules
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
