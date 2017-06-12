import { Engine } from './engine.class';
import { Doors } from './doors.class';

export class Car {

  engine: Engine;
  doors: Doors;

  constructor() {
    this.engine = new Engine();
    this.doors = new Doors();
  }

  startEngine() {
    this.engine.start();
  }
}
