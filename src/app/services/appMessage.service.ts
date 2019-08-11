import {Injectable} from '@angular/core';
import {Message} from '../models/Message';
import * as $ from 'jquery';
import {User} from '../models/User';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppMessageService {
  messages: Message[] = [
    // {
    //   ofUser: new User(),
    //   content: 'Nice to meet you!',
    //   time: new Date()
    // },
    // {
    //   ofUser: new User(),
    //   content: 'Nice to meet you!',
    //   time: new Date()
    // }
  ];

  constructor() {
  }

  getMessages() {
    return this.messages;
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }

  scrollAllMessage() {
    $(document).ready(() => {
      const scrollHeight = document.getElementById('all-message').scrollHeight;
      $('#all-message').scrollTop(scrollHeight);
      console.log(scrollHeight);
    });
  }
}
