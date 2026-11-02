const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works

const printAllPokemon = () => {
 for (const pokemon of pokemons)
  console.log(pokemon)
}
printAllPokemon();

// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.

const pokemonPikachu = {
 name: 'Pikachu',
 element: 'electric',
 color: 'yellow',
 strength: 32

}

// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.

 console.log(`${pokemonPikachu.name} is an ${pokemonPikachu.element} pokemon that is ${pokemonPikachu.color}`);

// 4)
// Add the property stillToCatch: true to the Pikachu object.

pokemonPikachu.stillToCatch = true;

// 5)
// change the value of the key strength in the Pikachu object.

pokemonPikachu.strength = 33;
console.log(pokemonPikachu.strength);

// 6)
// Delete a property from the Pikachu object.

delete pokemonPikachu.color;
console.log(pokemonPikachu);

// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutPokemons = [
  {
    name: "Bulbasaur",
    element: "water",
    strength: 13
  },
  {
    name: "Charmander",
    element: "fire",
    strength: 32
  },
  {
    name: "Squirtle",
    element: "water",
    strength: 44
  },
  {
    name: "Metapod",
    element: "bug-type",
    strength: 50
  },
  {
    name: "Pidgey",
    element: "fnormal and flying",
    strength: 40
  }
];

// 8)
// Print out all the NAMES of the pokemons in this new array.

for (const pokemon of moreAboutPokemons) {
  console.log(pokemon.name);
}

// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.

console.log(`${moreAboutPokemons[0].name} is a ${moreAboutPokemons[0].element} pokemon with the strength of ${moreAboutPokemons[0].strength}`);
console.log(`${moreAboutPokemons[1].name} is a ${moreAboutPokemons[1].element} pokemon with the strength of ${moreAboutPokemons[1].strength}`);
console.log(`${moreAboutPokemons[2].name} is a ${moreAboutPokemons[2].element} pokemon with the strength of ${moreAboutPokemons[2].strength}`);
console.log(`${moreAboutPokemons[3].name} is a ${moreAboutPokemons[3].element} pokemon with the strength of ${moreAboutPokemons[3].strength}`);
console.log(`${moreAboutPokemons[4].name} is a ${moreAboutPokemons[4].element} pokemon with the strength of ${moreAboutPokemons[4].strength}`);