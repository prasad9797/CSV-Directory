import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/interfaces/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    });
  }
}
