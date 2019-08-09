import {User} from './User';

export class Message {
  ofUser: User;
  content: string;
  time: Date;

  constructor(ofUser: User, content: string, time: Date) {
    this.ofUser = ofUser;
    this.content = content;
    this.time = time;
  }


// time: Date;
}
