interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

type UnknownPet = Fish | Bird;

function printPet(pet: UnknownPet): void {
  // if ('swim' in pet) {
  //   pet.swim();
  // }
  if (pet as Fish) {
    (pet as Fish).swim();
  }
}

printPet({
  swim: () => {
    console.log('nadando');
  },
});
