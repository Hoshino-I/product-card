const productCards = document.querySelectorAll(".product-card")
const buttonForChangeColorAllCard = document.querySelector("#change-color-all-card")

buttonForChangeColorAllCard.addEventListener("click", () => {
  productCards.forEach((card) => card.style.backgroundColor = "black")
})

console.log(productCards)


const firstProductCard = document.querySelector(".product-card")
const buttonForChangeColorFirstCard = document.querySelector("#change-color-first-card")

buttonForChangeColorFirstCard.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = "orange"
})

const openPageGoogle = document.querySelector("#open-page-google");

openPageGoogle.addEventListener("click", openGoogle)

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?")

  if (answer == true) {
    window.open("https://google.com")
  } else {
    return;
  }
}

const outputLogButton = document.querySelector("#output-console-loge")
outputLogButton.addEventListener("click", () => outputConsoleLog("ДЗ №4"))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

const mainTitle = document.querySelector(".title");

mainTitle.addEventListener("mouseenter", () => {
  
  console.log(mainTitle.textContent);
  
});

const buttonChangeColor = document.querySelector("#button-change-color")
buttonChangeColor.addEventListener("click", () => {
  buttonChangeColor.classList.toggle("button--active")
})