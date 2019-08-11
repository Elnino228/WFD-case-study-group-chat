import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {Router} from '@angular/router';
import * as $ from 'jquery';

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

  receiver: User;

  admin: User = {id: 1000, username: 'admin', password: '123', avatar: '../../assets/images/avatar2.png', status: false};

  loginSuccess = false;

  constructor(private router: Router) {
    this.setDefaultCurrentUser();
    this.setDefaultReceiver();
  }

  isAuthenticated(): boolean {
    return this.loginSuccess;
  }

  login(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      this.users[i].status = false;
      if (user.username === this.users[i].username && user.password === this.users[i].password) {
        this.users[i].status = true;
        this.currentUser = this.users[i];
        this.loginSuccess = true;
      }
    }
    this.toChatGroup();
  }

  toChatGroup() {
    if (this.loginSuccess) {
      alert('Login successfully');
      this.router.navigateByUrl('/chat');
    } else {
      this.router.navigateByUrl('/login');
      alert('Login is failed. Please try again!');
    }
  }

  logout() {
    this.currentUser = new User();
    this.loginSuccess = false;
  }

  getUsers() {
    return this.users;
  }

  search(keyword: string): User[] {
    return this.getUsers().filter(
      user => user.username.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
  }

  chatTo(user: User) {
    this.receiver = user;
  }

  setDefaultCurrentUser() {
    this.currentUser = {
      id: 0,
      username: 'Dat',
      password: '123',
      avatar: '../../assets/images/avatar1.png',
      status: true
    };
  }

  setDefaultReceiver() {
    this.receiver = this.users[1];
  }
}
