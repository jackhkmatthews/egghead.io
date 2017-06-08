import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
            <div>
                <input #myInput type="text" [(ngModel)]="message"
                [ngClass]="{mousedown: isMouseDown }"
                (mousedown)="isMouseDown = true"
                (mouseup)="isMouseDown = false"
                (mouseleave)="isMouseDown = false"
                >
                <button (click)="update.emit({text:message})">Click me!</button>
            </div>
  `,
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
