import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  link: string;
  subItems: { label: string; icon: string; link: string }[];
  isOpen?: boolean;  // Property to manage dropdown state
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isCollapsed: boolean = false;
  height:number = window.innerHeight;

  constructor(private router: Router, private route: ActivatedRoute) {}

  navItems: NavItem[] = [
    {
      label: 'Dashboard',
      icon: 'home',
      link: '/home',
      subItems: [],
    },
    {
      label: 'Posts',
      icon: 'edit',
      link: '/',
      subItems: [
        { label: 'Create Post', icon: 'plus-circle', link: '/posts/create' },
        { label: 'My Posts', icon: 'list', link: '/posts/my-posts' },
        {label : 'All Posts', icon: 'list', link: '/posts'},
      ],
    },
    {
      label: 'Messages',
      icon: 'envelope',
      link: '/',
      subItems: [
        { label: 'Inbox', icon: 'inbox', link: '/messages/inbox' },
        { label: 'Sent', icon: 'paper-plane', link: '/messages/sent' },
        { label: 'Compose', icon: 'pen', link: '/messages/compose' },
        {label : 'All Messages', icon: 'envelope', link: '/messages'},
      ],
    },
    {
      label: 'Notifications',
      icon: 'bell',
      link: '/notifications',
      subItems: [],
    },
    {
      label: 'Friends',
      icon: 'users',
      link: '/',
      subItems: [
        { label: 'Find Friends', icon: 'search', link: '/friends/find' },
        { label: 'My Friends', icon: 'address-book', link: '/friends/my-friends' },
      ],
    },
    {
      label: 'Profile',
      icon: 'user',
      link: '/',
      subItems: [
        { label: 'View Profile', icon: 'user-circle', link: '/profile/view' },
        { label: 'Edit Profile', icon: 'edit', link: '/profile/edit' },
        { label: 'Change Password', icon: 'key', link: '/profile/change-password' },
      ],
    },
    {
      label: 'Settings',
      icon: 'cogs',
      link: '/',
      subItems: [
        { label: 'Privacy', icon: 'shield-alt', link: '/settings/privacy' },
        { label: 'Security', icon: 'lock', link: '/settings/security' },
        { label: 'Account', icon: 'user-cog', link: '/settings/account' },
      ],
    }
  ];
  

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleDropdown(item: NavItem) {
    item.isOpen = !item.isOpen;
  }

  closeDropdown() {
    this.navItems.forEach(item => {
      item.isOpen = false;
    });
  }

  getFullRoute(link: string): string {
    if(link =='/home') return '/dashboard';
    if(link=='/') return this.router.url;
    // const currentUrl = this.router.url; // Get current route
    // return currentUrl.endsWith('/') ? currentUrl + link : currentUrl + '/' + link;
    return '/dashboard' + link;
  }
}
