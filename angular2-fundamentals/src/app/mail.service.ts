import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

    messages = [
      {id: 1, text: 'This is message 1'},
      {id: 2, text: 'This is message 2'},
      {id: 3, text: 'This is message 3'},
    ];

  constructor() { }

  update(id, message){
    this.messages = this.messages.map(m => {
      if (m.id === id) {
        return {id, text: message};
      } else {
        return m;
      }
    });
  }
}
