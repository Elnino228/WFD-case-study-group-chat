import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/User';
import {AuthService} from '../auth.service';
import {AppMessageService} from '../appMessage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  user: User;

  constructor(private authService: AuthService,
              private appMessageService: AppMessageService) {
    this.user = new User();
    this.user.avatar = '';
    this.user.status = true;
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    this.authService.login(this.user);
    const messages = this.appMessageService.getMessages();
    for (let i = 0; i < messages.length; i++) {
      messages[i].ofUser.status = false;
      if (this.authService.currentUser.id === messages[i].ofUser.id) {
        messages[i].ofUser.status = true;
      }
    }
    this.initUser();
    alert('Login successfully');
  }

  logout() {
    this.authService.logout();
    alert('Logout successfully');
  }

  initUser() {
    this.user = new User();
  }

}
