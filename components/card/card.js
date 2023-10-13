export default function createCharacterCard() {
  const characterCard = document.createElement("li");
  characterCard.innerHTML = `
    <li class="card">
    <div class="card__image-container">
      <img
        class="card__image"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick Sanchez"
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">Rick Sanchez</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">Alive</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description"></dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">51</dd>
      </dl>
    </div>
  </li>
  `;
  return characterCard;
}
// ${cardTitle}
