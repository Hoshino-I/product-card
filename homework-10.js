import { productList } from './products.js';

const commonObject = productList.reduce((acc, item) => {
  acc[item.name] = item.description;
  return acc;
}, {});

const createCardTemplate = (product) => {
  return `
    <div class="product-card">
    <img class="product-card__image" src="img/${product.image}.png" alt="Товар ${product.name}">
    <span class="product-card__category">${product.category}</span>
    <h2 class="product-card__title">${product.name}</h2>
    <p class="product-card__description">${product.description}</p>
    <span class="product-card__composition-title">Состав: </span>
    <ul class="product-card__composition-list">
        <li class="product-card__composition-item">
          ${product.composition.join('</li><li class="product-card__composition-item">')}
        </li>
      </ul>
      <div class="product-card__price-box">
        <b class="product-card__price-label">Цена</b>
        <span class="product-card__price-value">${product.price} ₽</span>
      </div>

    </div>
  `;
}

const getCardsCount = () => {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(userInput);
  if (count >= 1 && count <= 5) {
    return count;
  } else {
    alert("Неверное значение!");
    return 5;
  }
}

const renderCards = (list, count) => {
  const slicedList = list.slice(0, count);
  const container = document.querySelector(".catalog");
  container.innerHTML = "";

  slicedList.forEach(product => {
    const cardHtml = createCardTemplate(product);
    container.innerHTML += cardHtml;
  });
}

const userChoice = getCardsCount();
renderCards(productList, userChoice);