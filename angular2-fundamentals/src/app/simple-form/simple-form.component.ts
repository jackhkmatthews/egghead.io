import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
            <div>
                <input #myInput type="text">
                <button (click)="onClick($event)">Click me!</button>
            </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    onClick(value){
        console.log(value); 
    }      
}
