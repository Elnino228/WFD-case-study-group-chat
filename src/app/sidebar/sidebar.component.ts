import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {User} from '../models/User';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userList: User[];
  constructor(private authService: AuthService) {
    this.userList = this.authService.getUsers();
  }

  ngOnInit() {
  }

}
