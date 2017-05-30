import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

    messages = [
        'This is message 1',
        'This is message 2',
        'This is message 3'
    ];

  constructor() { }

}
