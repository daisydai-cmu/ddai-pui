const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

const rollBasePrice = rolls[rollType].basePrice;
const rollImageURL = rolls[rollType].imageFile;

//for updating page details
function updateDetails() {
  const pagePrice = document.querySelector("#specific-item-price");
  const pageIMG = document.querySelector("#specific-product-img");
  const pageTitle = document.querySelector(".specific-roll-name");

  pageTitle.innerText = rollType;
  pagePrice.innerText = rollBasePrice;
  pageIMG.src = rollImageURL;
}

updateDetails();

let cart = [];

function retrieveFromLocalStorage() {
  const cartArrayString = localStorage.getItem("storedCart");
  const cartArray = JSON.parse(cartArrayString);
  cart = cartArray;
  console.log(cart);
}

if (localStorage.getItem("storedCart") != null) {
  retrieveFromLocalStorage();
}

//for updating Cart page
class Roll {
  type;
  glazing;
  size;
  basePrice;
  total;

  constructor(rollType, rollGlazing, packSize, basePrice, totalPrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
    this.total = totalPrice;
  }
}

function saveToLocalStorage() {
  const cartArrayString = JSON.stringify(cart);
  localStorage.setItem("storedCart", cartArrayString);
  console.log(cartArrayString);
}

function updateCart() {
  const newRoll = new Roll(
    rollType,
    currentGlazing.option,
    currentPackSize.option,
    rollBasePrice,
    total
  );
  cart.push(newRoll);
  saveToLocalStorage();
  console.log(cart);
}

//grabbing the button
const addButton = document.querySelector("#button");

addButton.onclick = updateCart;
