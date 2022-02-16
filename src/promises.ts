//
export {};

class Family {
  constructor(
    public readonly name: string,
    public readonly castles: string[]
  ) {}
}

const lannister = new Family('Lannister', ['Casterly Rock', 'Winterfell']);
const targaryen = new Family('Targaryen', ['Dragonstone', 'Summerhall']);

const families: Family[] = [lannister, targaryen];

function getCastlesByFamily(family: string): Promise<string[]> {
  let p: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      let foundCastles = families.filter((x) => x.name === family);

      if (foundCastles.length > 0) {
        resolve(foundCastles.map((x) => x.castles)[0]);
      } else {
        reject('Castles not found');
      }
    }, 2000);
  });

  return p;
}

console.log('Iniciando busqueda de castillos...');
getCastlesByFamily('Lannister')
  .then((castles) =>
    console.log(`Se encontraron los siguients castillos: ${castles.join(', ')}`)
  )
  .catch((err) => console.log(`Error: ${err}`));
console.log('Finalizando busqueda de castillos...');
