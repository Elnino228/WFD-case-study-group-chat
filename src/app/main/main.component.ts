import {Component, OnInit} from '@angular/core';
import {Message} from '../models/Message';
import {AppMessageService} from '../appMessage.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  messages: Message[];

  constructor(private appMessageService: AppMessageService, private authService: AuthService) {
    this.messages = this.appMessageService.getMessages();
  }

  ngOnInit() {
  }

  send(message) {
    this.appMessageService.addMessage(message);
    this.appMessageService.scrollAllMessage();
  }

}
