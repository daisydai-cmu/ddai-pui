const glazing = {
    options: ["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"],
    priceAdaptation: [0, 0, 0.5, 1.5],
  };
  
  const packSize = {
    options: ["1", "3", "6", "12"],
    priceAdaptation: [1, 3, 5, 10],
  };
  
  const base_price = 2.49;
  
  var glazingDropdown = document.getElementById("glazingOptions");
  var packSizeDropdown = document.getElementById("pack-size");
  var bunPrice = document.getElementById("specific-item-price");
  
  var glazingPrice = 0;
  var pack_price = 1;
  
  for (var i = 0; i < glazing.options.length; i++) {
    var opt = glazing.options[i];
    var ele = document.createElement("option");
    ele.textContent = opt;
    ele.value = opt;
    glazingDropdown.appendChild(ele);
  }
  
  for (var i = 0; i < packSize.options.length; i++) {
    var opt = packSize.options[i];
    var ele = document.createElement("option");
    ele.textContent = opt;
    ele.value = opt;
    packSizeDropdown.appendChild(ele);
  }
  
  function updateBunPrice() {
    let new_price = parseFloat((base_price + glazingPrice) * pack_price).toFixed(
      2
    );
    bunPrice.textContent = new_price;
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
    pack_price = newPackPrice;
    updateBunPrice();
  }
  