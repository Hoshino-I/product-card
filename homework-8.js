const myProfile = {
  firstName: "Шамиль",
  lastName: "Таштемиров",
  age: 18,
  email: "belka84083@gmail.com",
  country: "Россия",
  city: "Махачкала",
  isRelationship: true,
  homeworksPassed: 8
}

const myCar = {
  brand: "BMW",
  model: "M5",
  year: 2022,
  color: "black",
  gearbox: "automatic"
};

myCar.owner = myProfile;
console.log(myCar);

const checkMaxSpeed = (carObj) => {
  if ("maxSpeed" in carObj) {
    return;
  } else {
    carObj.maxSpeed = 250;
  }
};

checkMaxSpeed(myCar);
console.log(myCar);

const showPropertyValue = (biceObj, box) => {
  console.log( biceObj[box] );
}
showPropertyValue(myCar, "color");

productsArray = ["Банан", "Манго", "Яблоко"];


const books = [
  {
    name: "Думай и уверуй",
    author: "Ирахим абу Халид",
    yearOfmManufacture: 2025
  },
  {
    name: "Великое достоинство Корана",
    author: "Амаш абу мухаммад",
    yearOfmManufacture: 2023
  },
  {
    name: "История древнего рима",
    author: "Мери бирд",
    yearOfmManufacture: 2023
  }
]


books.push( {
  name: "Удивительные ответы на повседневные вопросы",
  author: "Йорди Перейра",
  yearOfmManufacture: 2022
});


const booksOfHarryPotter = [
  {
    name: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    yearOfmManufacture: 1997
  },
  {
    name: "Гарри Поттер и Тайная комната",
    author: "Джоан Роулинг",
    yearOfmManufacture: 1998
  },
  {
    name: "Гарри Поттер и узник Азкабана",
    author: "Джоан Роулинг",
    yearOfmManufacture: 1999
  },
]

const allbooks = [ ...books, ...booksOfHarryPotter];

const updateBooksRarity = (rarityBook) => {
  return books.yearOfmManufacture < 2000
  ? { ...books, isRare: true}
  : { ...books, isRare: false};
}

const rareBooksList = updateBooksRarity(allbooks)
console.log(rareBooksList);