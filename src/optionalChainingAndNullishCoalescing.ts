interface Media {
  title: string;
  genres: string[];
  director?: { name: string };
}

const fetchMediaData: Media = {
  title: 'The Godfather',
  genres: ['Crime', 'Drama'],
  // director: { name: 'Francis Ford Coppola' },
};

// optional chaining
console.log(fetchMediaData.director?.name);

// nullish coalescing
console.log(fetchMediaData.director?.name ?? 'No director');
