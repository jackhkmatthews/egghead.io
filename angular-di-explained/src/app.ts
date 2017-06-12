import { Engine } from './engine.class';
import { Doors } from './doors.class';
import { Car } from './car.class';


function main() {
  let engine = new Engine();
  let doors = new Doors();

  let car = new Car(engine, doors);

  car.startEngine();
}

main();
