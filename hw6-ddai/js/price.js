var glazing = [
  {
    option: "Keep original",
    priceAdaptation: 0,
  },
  {
    option: "Sugar milk",
    priceAdaptation: 0,
  },
  {
    option: "Vanilla milk",
    priceAdaptation: 0.5,
  },
  {
    option: "Double chocolate",
    priceAdaptation: 1.5,
  },
];

var packSize = [
  {
    option: "1",
    priceAdaptation: 1,
  },
  {
    option: "3",
    priceAdaptation: 3,
  },
  {
    option: "6",
    priceAdaptation: 5,
  },
  {
    option: "12",
    priceAdaptation: 10,
  },
];

// more efficient to globally define elements here.
var glazingDropdown = document.querySelector("#glazingOptions");
var packSizeDropdown = document.querySelector("#pack-size");
var priceElement = document.querySelector("#specific-item-price");

var currentGlazing;
var currentPackSize;
var total;

// populate dropdowns
for (let i = 0; i < glazing.length; i++) {
  let option = document.createElement("option");
  option.innerText = glazing[i].option;
  option.value = i;
  glazingDropdown.append(option);
}

for (let i = 0; i < packSize.length; i++) {
  let option = document.createElement("option");
  option.innerText = packSize[i].option;
  option.value = i;
  packSizeDropdown.append(option);
}

function displayPrice(glazing, packSize) {
  newPrice =
    (rollBasePrice + glazing.priceAdaptation) * packSize.priceAdaptation;
  total = parseFloat(newPrice.toFixed(2));
  priceElement.innerText = total;
}

function onSelectValueChange() {
  currentGlazing = glazing[parseInt(glazingDropdown.value)];
  currentPackSize = packSize[parseInt(packSizeDropdown.value)];
  displayPrice(currentGlazing, currentPackSize);
}

onSelectValueChange();
glazingDropdown.addEventListener("change", onSelectValueChange);
packSizeDropdown.addEventListener("change", onSelectValueChange);
