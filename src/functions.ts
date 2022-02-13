function sumar(valor: number, valor2: number): number {
  return valor + valor2;
}

const sumar2 = (valor1: number, valor2: number): number => {
  return valor1 + valor2;
};

const throwError = (message: string) => {
  throw new Error(message);
};

// types in functions
let sumar3: (a: number, b: number) => number;

//callbacks
function print(
  value1: number,
  value2: number,
  show: (valueCallback: number) => void
): void {
  let result = value1 + value2;

  show(result);
}

print(2, 3, (x) => {
  console.log(x);
});
