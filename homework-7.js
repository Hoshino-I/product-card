const cityTemperature = (city, temperature) => `${city}${temperature}`;

console.log(cityTemperature("Москва: ", "25°"));

const speedOfLight = 300000;

const checkSpeed = (currentSpeed) => {
  if (currentSpeed > speedOfLight) {
    console.log("Сверхсветовая скорость")
  } else if (currentSpeed < speedOfLight) {
    console.log("Субсветовая скорость")
  } else {
    console.log("Скорость света")
  }
}

checkSpeed(500000);
checkSpeed(100);
checkSpeed(300000);

const product = "банан"
const price = 100;

const buyProduct = (budget) => {
  const missingMoney = price - budget;
  if (budget >= price) {
    console.log(`Вы купили ${product}, спасибо за покупку!`)
  } else {
    console.log(`Вам не хватает ${missingMoney}$, пополните баланс`)
  }
}

buyProduct(150);
buyProduct(40);