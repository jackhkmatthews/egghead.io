import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
      @Inject('mail') private mail,
  ){}

  onUpdate(id, message){
    this.mail.update(id, message);
  }
}
