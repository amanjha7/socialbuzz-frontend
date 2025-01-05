import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-snack-bar',
  templateUrl: './user-snack-bar.component.html',
  styleUrls: ['./user-snack-bar.component.scss'],
})
export class UserSnackBarComponent implements OnInit {
  @Input() usersArray!: any[];
  searchTerm: string = '';
  filteredUsers: any[] = [];

  ngOnInit(): void {
    this.filteredUsers = this.usersArray; // Initialize with the full array
  }

  filterUsers(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.usersArray.filter((user) =>
      user.username.toLowerCase().includes(term)
    );
  }
}
