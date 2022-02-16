class Family {
  constructor(
    public readonly name: string,
    public readonly castles: string[]
  ) {}
}

const lannister = new Family('Lannister', ['Casterly Rock', 'Winterfell']);
const targaryen = new Family('Targaryen', ['Dragonstone', 'Summerhall']);

const families: Family[] = [lannister, targaryen];

// function getCastlesByFamily(
//   family: string,
//   callback: (err?: Error, castles?: string[]) => void
// ): void {}

interface CastleCallback {
  (err?: Error, castles?: string[]): void;
}
function getCastlesByFamily(family: string, callback: CastleCallback): void {
  setTimeout(() => {
    try {
      let foundCastles = families.filter((x) => x.name === family);

      if (foundCastles.length > 0) {
        callback(undefined, foundCastles.map((x) => x.castles)[0]);
      } else {
        throw new Error('Castles not found');
      }
    } catch (error: any) {
      callback(error, undefined);
    }
  }, 2000);
}

function logCastleSearch(err?: Error, castles?: string[]): void {
  if (err) {
    console.log(`Mensaje de error: ${err.message}`);
  } else {
    console.log('Se encontraron los siguients castillos:');
    console.log(castles);
  }
}

console.log('Iniciando busqueda de castillos...');
getCastlesByFamily('Lannister', logCastleSearch);
console.log('Finalizando busqueda de castillos...');
