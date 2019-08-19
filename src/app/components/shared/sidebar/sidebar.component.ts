import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/User';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userList: User[] = [];

  constructor(public authService: AuthService) {
    for (const user of this.authService.getUsers()) {
      this.userList.push(user);
    }
    const id = this.authService.currentUser.id;
    this.userList.splice(id, 1);
  }

  ngOnInit() {
  }

  search(keyword: string) {
    this.userList = this.authService.search(keyword);
  }
}
