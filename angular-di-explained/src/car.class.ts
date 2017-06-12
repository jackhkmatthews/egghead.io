import { Engine } from './engine.class';
import { Doors } from './doors.class';

export class Car {

  constructor(private engine: Engine, private doors: Doors) {}

  startEngine() {
    this.engine.start();
  }
}
