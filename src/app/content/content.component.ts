import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/User';
import {AppMessageService} from '../appMessage.service';
import {Message} from '../models/Message';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() messages: Message[];

  constructor() {
  }

  ngOnInit() {
  }

}
