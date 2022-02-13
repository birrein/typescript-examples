function showInfo(user: any): void {
  console.log(user.name);
}

showInfo({ name: "John", age: 25 });

function showFormattedInfo(user: any) {
  console.log(`${user.name} (${user.age})`);
}

showFormattedInfo({ name: "John", age: 25 });

let unusable: void;
unusable = undefined;

function handleError(code: number, message: string): never {
  throw new Error(`${code}. Code: ${message}`);
}

try {
  handleError(404, "Not Found");
} catch (error) {}

function sumNumbers(limit: number): never {
  let sum = 0;
  while (true) {
    sum += 1;
  }
}

sumNumbers(10);
