import createCharacterCard from "./components/card/card.js";

const characters = await fetchCharacters();

const cardContainer = document.querySelector('[data-js="card-container"]');

//CARDS
characters.results
  .map((character) => createCharacterCard(character))
  .forEach((card) => cardContainer.append(card));

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  const url = "https://rickandmortyapi.com/api/character/?page=1";

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

fetchCharacters();
