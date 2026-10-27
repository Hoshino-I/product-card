class Drink {
  #temperature;

  constructor(name, size, price, temperature) {

    if (new.target === Drink) {
    throw new Error("Нельзя создавать экземпляры абстрактного класса Drink напрямую!");
}

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Название: ${this.name}, Цена: ${this.price}`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temp) {
    this.#temperature = temp;
  }

  #prepare() {
    console.log("Напиток готовится...")
  }

  serve() {
    this.#prepare();
    this.setTemperature(85);
    console.log("Напиток подан!")
  }

}

class Coffee extends Drink {
  constructor(name, size, price, temperature, milkType, beanType) {
    super(name, size, price, temperature)

    this.milkType = milkType;
    this.beanType = beanType;
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType, hasSugar) {
    super(name, size, price, temperature)

    this.teaType = teaType;
    this.hasSugar = hasSugar;
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Добро пожаловать в кафе "${this.name}", мы находимся по адресу: ${this.location} `;
  }

  orderDrink(drink) {
    console.log(`Поступил заказ на напиток: ${drink.name}`);

    drink.serve()
  }
}

const myCafe = new Cafe("Кафе хаус", "кл. Пушкина, д. 10")
const myCoffee = new Coffee("Капучино", "250мл", 300, 20, "Овсяное", "Арабика")
const myTea = new Tea("Черный чай с пах-пахом", "300мл", 250, 20, "Черный", "Без сахара")

console.log(myCafe.getInfo());
myCafe.orderDrink(myCoffee);
myCafe.orderDrink(myTea);