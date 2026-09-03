import { productList } from './products.js';

const commonObject = productList.reduce((acc, item) => {
  acc.push({
    [item.name]: item.description
  });

  return acc;
}, []);

const createCardTemplate = (product) => {
  const template = document.querySelector('#product-template');
  const cardClone = template.content.cloneNode(true);

  cardClone.querySelector('.product-card__image').src = `img/${product.image}.png`;
  cardClone.querySelector('.product-card__image').alt = `Товар ${product.name}`;
  cardClone.querySelector('.product-card__category').textContent = product.category;
  cardClone.querySelector('.product-card__title').textContent = product.name;
  cardClone.querySelector('.product-card__description').textContent = product.description;
  cardClone.querySelector('.product-card__price-value').textContent = `${product.price} ₽`;

  const compositionList = cardClone.querySelector('.product-card__composition-list');
  product.composition.forEach(text => {
    const li = document.createElement('li');
    li.classList.add('product-card__composition-item');
    li.textContent = text;
    compositionList.append(li);
  });

  return cardClone;
};

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
    const cardElement = createCardTemplate(product);
    container.append(cardElement);
  });
}

const userChoice = getCardsCount();
renderCards(productList, userChoice);