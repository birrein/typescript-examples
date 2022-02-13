class Bird {
  fly(): void {
    console.log('I am flying');
  }
}

class Fish {
  swim(): void {
    console.log('I am swimming');
  }
}

type UnknownPet2 = Fish | Bird;

function printPet(pet: UnknownPet2): void {
  if (pet instanceof Fish) {
    pet.swim();
  }
}

const pet = new Fish();

printPet(pet);
