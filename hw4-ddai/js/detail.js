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

//create empty array
let cart = [];

//for updating Cart page
class Roll {
  type;
  glazing;
  size;
  basePrice;

  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

function updateCart() {
  const newRoll = new Roll(
    rollType,
    currentGlazing.option,
    currentPackSize.option,
    rollBasePrice
  );
  cart.push(newRoll);
  console.log(cart);
}

//grabbing the button
const addButton = document.querySelector("#button");

addButton.onclick = updateCart;
