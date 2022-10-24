// const queryString = window.location.search;
// const params = new URLSearchParams(queryString);
// const rollType = params.get("roll");

// const rollBasePrice = rolls[rollType].basePrice;
// const rollImageURL = rolls[rollType].imageFile;

class Roll {
  type;
  glazing;
  size;
  basePrice;
  element;

  constructor(rollType, rollGlazing, packSize, rollPrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = rollPrice;

    this.element = null;
  }
}

let cart = [];

function saveToLocalStorage() {
  const cartArrayString = JSON.stringify(cart);
  localStorage.setItem("storedCart", cartArrayString);
  console.log(cartArrayString);
}

function retrieveFromLocalStorage() {
  const cartArrayString = localStorage.getItem("storedCart");
  const cartArray = JSON.parse(cartArrayString);
  cart = cartArray;
  console.log(cart);
}

if (localStorage.getItem("storedCart") != null) {
  retrieveFromLocalStorage();
}

//To store info for glazing and pack size adaptation
const glazingLookup = {
  Original: 0,
  "Sugar Milk": 0,
  "Vanilla Milk": 0.5,
  "Double Chocolate": 1.5,
};

const packsizeLookup = {
  1: 1,
  3: 3,
  6: 5,
  12: 10,
};

//For calculating price of each item according to glazing and pack size
function calculatePrice(roll) {
  // console.log('base price: ' + roll.basePrice)
  // console.log('glazinglookup ' + parseFloat(glazingLookup[roll.glazing]))
  // console.log('packsize ' + parseFloat(packsizeLookup[roll.size]))
  let glazingPrice = Object.keys(glazing).find(
    (key) => glazing[key] === roll.glazing
  );
  let packSizePrice = Object.keys(packSize).find(
    (key) => packSize[key] === roll.packSize
  );
  const newPrice = (roll.basePrice + glazingPrice) * packSizePrice;
  roll.totalPrice = parseFloat(newPrice.toFixed(2));
}

// For creating Roll object
function createElement(roll) {
  const template = document.querySelector("#roll-template");
  const clone = template.content.cloneNode(true);
  roll.element = clone.querySelector(".cart-item");

  const btnDelete = roll.element.querySelector(".delete-button");
  btnDelete.addEventListener("click", () => {
    deleteRoll(roll);
  });

  const rollListElement = document.querySelector("#roll-list");
  rollListElement.append(roll.element);

  updateElement(roll);
  updateTotalPrice();
}

//For updating DOM
function updateElement(roll) {
  const rollNameElement = roll.element.querySelector(".roll-name");
  const rollGlazingElement = roll.element.querySelector(".roll-glazing");
  const rollPackSizeElement = roll.element.querySelector(".roll-packsize");
  const rollPriceElement = roll.element.querySelector(".roll-price");

  let newImageURL = rolls[roll.type]["imageFile"];
  let rollImageElement = roll.element.querySelector(".cart-item-img");
  rollImageElement.src = newImageURL;

  rollNameElement.innerText = roll.type + " Cinnamon Roll";
  rollGlazingElement.innerText = "Glazing: " + roll.glazing;
  rollPackSizeElement.innerText = "Pack Size: " + roll.size;
  rollPriceElement.innerText = roll.total;
}

for (const roll of cart) {
  createElement(roll);
}

//For updating total price
function updateTotalPrice() {
  let counter = 0;
  for (let roll of cart) {
    counter += roll.total;
  }
  let totalPrice = document.querySelector(".total-price");
  totalPrice.innerText = "$ " + counter.toFixed(2);
}

//For removing rolls from cart and set when "Remove" is clicked
function deleteRoll(roll) {
  roll.element.remove();
  cart.splice(cart.indexOf(roll), 1);
  saveToLocalStorage();
  console.log(cart);
  updateTotalPrice();
}
