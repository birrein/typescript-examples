// Generic types in class
class ArrayOfNumbers {
  constructor(private collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(private collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAny<T> {
  constructor(private collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const cols = new ArrayOfAny<string>(['a', 'b', 'c']);
const rows = new ArrayOfAny<number>([1, 2, 3]);

// generic types in function parameters
function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
}

function printNumber(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
}

function printAny<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
}

printAny<string>(['a', 'b', 'c']);
printAny<number>([1, 2, 3]);

// Constraints
class Movie {
  constructor(private name: string) {}

  print(): void {
    console.log(`Movie name: ${this.name}`);
  }
}

class TvShow {
  constructor(private name: string) {}

  print(): void {
    console.log(`Tv show name: ${this.name}`);
  }
}

interface IMedia {
  print(): void;
}
function printMedia<T extends IMedia>(media: T[]) {
  media.forEach((m) => m.print());
}

const movie = new Movie('The Matrix');
const tvShow = new TvShow('The Big Bang Theory');

const media: IMedia[] = [movie, tvShow];

// KeyOf
function findValue<T extends object, U extends keyof T>(object: T, key: U) {
  return object[key];
}

findValue({ name: 'John' }, 'name');

// Built-in Generic Types
class OtherVehicle {
  branch: string = '';
  model: string = '';
}

function createVehicle(): OtherVehicle {
  const vehicle: Partial<OtherVehicle> = {};
  vehicle.branch = 'Ford';

  return vehicle as OtherVehicle;
}

let cars: Readonly<string[]> = ['Ford', 'Audi'];
// cars.push('BMW'); // Error: Cannot add to an immutable array
