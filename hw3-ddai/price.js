const glazing = {
    options: ["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"],
    price_adaptation: [0, 0, 0.5, 1.5],
  };
  
  const pack_size = {
    options: ["1", "3", "6", "12"],
    price_adaptation: [1, 3, 5, 10],
  };
  
  const base_price = 2.49;
  
  var glazing_dropdown = document.getElementById("glazingOptions");
  var pack_size_dropdown = document.getElementById("pack-size");
  var bun_price = document.getElementById("specific-item-price");
  
  var glazing_price = 0;
  var pack_price = 1;
  
  for (var i = 0; i < glazing.options.length; i++) {
    var opt = glazing.options[i];
    var ele = document.createElement("option");
    ele.textContent = opt;
    ele.value = opt;
    glazing_dropdown.appendChild(ele);
  }
  
  for (var i = 0; i < pack_size.options.length; i++) {
    var opt = pack_size.options[i];
    var ele = document.createElement("option");
    ele.textContent = opt;
    ele.value = opt;
    pack_size_dropdown.appendChild(ele);
  }
  
  function updateBunPrice() {
    let new_price = parseFloat((base_price + glazing_price) * pack_price).toFixed(
      2
    );
    bun_price.textContent = new_price;
  }
  
  updateBunPrice();
  
  function glazingChange(element) {
    var now_price = element.value;
    var newGlazingPrice =
      glazing.price_adaptation[glazing.options.indexOf(now_price)];
    glazing_price = newGlazingPrice;
    updateBunPrice();
  }
  
  function packSizeChange(element) {
    var now_pack_price = element.value;
    var newPackPrice =
      pack_size.price_adaptation[pack_size.options.indexOf(now_pack_price)];
    pack_price = newPackPrice;
    updateBunPrice();
  }
  