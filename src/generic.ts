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
