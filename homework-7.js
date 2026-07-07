const getCityTemperature = (city, temperature) => `Сейчас в ${city} температура ${temperature} градусов по Цельсию`;

console.log(getCityTemperature("Москвe", "25"));

const SPEED_OF_LIGHT = 300000;

const checkSpeed = (currentSpeed) => {
  if (currentSpeed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость")
  } else if (currentSpeed < SPEED_OF_LIGHT) {
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

const tryBuyProduct = (budget) => {
  const missingMoney = price - budget;
  if (budget >= price) {
    console.log(`Вы купили ${product}, спасибо за покупку!`)
  } else {
    console.log(`Вам не хватает ${missingMoney}$, пополните баланс`)
  }
}

tryBuyProduct(150);
tryBuyProduct(40);