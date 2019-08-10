import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../../models/Message';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()
  message: Message;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

}
