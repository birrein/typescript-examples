type stringOrArray = string | string[];

function reverse(stringOrArray: string): string;
function reverse(stringOrArray: string[]): string[];
function reverse(stringOrArray: stringOrArray): stringOrArray {
  if (typeof stringOrArray === 'string') {
    return stringOrArray.split('').reverse().join('');
  }

  return stringOrArray.reverse();
}

const foo = reverse(['a', 'b', 'c']);
const bar = reverse('hello');

console.log(foo);
