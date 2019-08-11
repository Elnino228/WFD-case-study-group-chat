import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {AuthService} from '../../../services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  chatTo() {
    setTimeout(() => {
      this.authService.chatTo(this.user);
    }, 800);

    const content = '.' + document.getElementById('content').className;
    $(content).hide('slow');
    $(content).show('slow');
  }
}
