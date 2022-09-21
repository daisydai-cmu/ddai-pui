const glazing = {
    options: ["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"],
    priceAdaptation: [0, 0, 0.5, 1.5],
  };
  
  const packSize = {
    options: ["1", "3", "6", "12"],
    priceAdaptation: [1, 3, 5, 10],
  };
  
  const basePrice = 2.49;
  
  var glazingDropdown = document.getElementById("glazingOptions");
  var packSizeDropdown = document.getElementById("pack-size");
  var bunPrice = document.getElementById("specific-item-price");
  
  var glazingPrice = 0;
  var packPrice = 1;
  
  for (var i = 0; i < glazing.options.length; i++) {
    var opt = glazing.options[i];
    var element = document.createElement("option");
    element.textContent = opt;
    element.value = opt;
    glazingDropdown.appendChild(element);
  }
  
  for (var i = 0; i < packSize.options.length; i++) {
    var opt = packSize.options[i];
    var element = document.createElement("option");
    element.textContent = opt;
    element.value = opt;
    packSizeDropdown.appendChild(element);
  }
  
  function updateBunPrice() {
    let newPrice = parseFloat((basePrice + glazingPrice) * packPrice).toFixed(
      2
    );
    bunPrice.textContent = newPrice;
  }
  
  updateBunPrice();
  
  function glazingChange(element) {
    var updatedPrice = element.value;
    var newGlazingPrice =
      glazing.priceAdaptation[glazing.options.indexOf(updatedPrice)];
    glazingPrice = newGlazingPrice;
    updateBunPrice();
  }
  
  function packSizeChange(element) {
    var nowPackPrice = element.value;
    var newPackPrice =
      packSize.priceAdaptation[packSize.options.indexOf(nowPackPrice)];
    packPrice = newPackPrice;
    updateBunPrice();
  }
  