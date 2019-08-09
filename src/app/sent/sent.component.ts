import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from '../models/Message';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {
  @Output()
  press = new EventEmitter<Message>();
  message: Message;

  constructor(private authService: AuthService) {
    this.message = new Message(authService.currentUser, '', new Date());

  }

  ngOnInit() {
  }

  doSend() {
    this.message.time = new Date();
    this.message.ofUser = this.authService.currentUser;
    this.press.emit(this.message);
    this.refresh();
  }

  refresh() {
    this.message = new Message(this.authService.currentUser, '', new Date());
  }

}
