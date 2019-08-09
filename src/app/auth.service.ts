import {Injectable} from '@angular/core';
import {User} from './models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [
    {id: 0, username: 'Dat', password: '123', avatar: '../../assets/images/avatar1.png', status: true},
    {id: 1, username: 'Thao', password: '123', avatar: '../../assets/images/avatar2.png', status: false},
    {id: 2, username: 'Tuan Anh', password: '123', avatar: '../../assets/images/avatar3.png', status: false},
    {id: 3, username: 'Lam', password: '123', avatar: '../../assets/images/avatar4.png', status: false},
    {id: 4, username: 'Nam', password: '123', avatar: '../../assets/images/avatar1.png', status: false},
    {id: 5, username: 'Khanh', password: '123', avatar: '../../assets/images/avatar2.png', status: false},
  ];
  currentUser: User;
  admin: User = {id: 1000, username: 'admin', password: '123', avatar: '../../assets/images/avatar2.png', status: false};

  constructor() {
    this.currentUser = {
      id: 0,
      username: 'Dat',
      password: '123',
      avatar: '../../assets/images/avatar1.png',
      status: true
    };
  }

  isAuthenticated(): boolean {
    return this.currentUser.username === this.admin.username && this.currentUser.password === this.admin.password;
  }

  login(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      this.users[i].status = false;
      if (user.username === this.users[i].username && user.password === this.users[i].password) {
        this.users[i].status = true;
        this.currentUser = this.users[i];
      }
    }


    // this.curentUser.status = true;
  }

  logout() {
    this.currentUser = new User();
  }

  getUsers() {
    return this.users;
  }
}
