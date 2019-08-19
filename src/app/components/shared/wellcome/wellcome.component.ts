import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

  hideWelCome() {
    $('#wellcome').slideUp();
  }

  logout() {
    this.hideWelCome();
    this.authService.logout();
  }

}
