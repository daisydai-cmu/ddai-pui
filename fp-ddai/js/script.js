var counter = $("#counter-number");
var facts_learned = 0;
var banana_stage = 1;

const delta = 8;
let startX;
let startY;
let diffX;
let diffY;

var required_action = 0;

function new_fact(fact) {
  const fact_list = $("#fact-list");
  var new_card = $("<div></div>", {
    class: "fact-card new-card",
  });

  var sticker_image = $("<img />", {
    id: "sticker",
    src: "images/sticker.svg",
    alt: "Label sticker found on fruits",
  });

  var card_text = $("<p>" + fact + "</p>");

  sticker_image.appendTo(new_card);
  card_text.appendTo(new_card);

  $(".fact-card").each(function () {
    $(this).removeClass("new-card");
  });

  fact_list.prepend(new_card);
  while ($("#fact-list").height() + new_card.height() > $("#right").height()) {
    fact_list.children().last().remove();
  }
  facts_learned += 1;
  counter.text(facts_learned.toString());
}

function on_click() {
  if (banana_stage < 3) {
    banana_stage += 1;
  } else if (banana_stage == 3) {
    new_fact(get_fact());
    banana_stage += 1;
    $("#title").attr("src", "images/overlay2.png");
    required_action = 1;
  } else {
    banana_stage = 1;
    $("#title").attr("src", "images/overlay.png");
  }
  $("#banana").attr("src", "images/b" + banana_stage.toString() + ".png");
  console.log(required_action, banana_stage);
}

$("#banana").on("click", function () {
  if (required_action && diffX < delta && diffY < delta) {
    on_click();
    required_action = 0;
  }
});

$("#banana").on("mousedown", function (event) {
  startX = event.pageX;
  startY = event.pageY;
});

$("#banana").on("mouseup", function (event) {
  diffX = Math.abs(event.pageX - startX);
  diffY = Math.abs(event.pageY - startY);
  if (!required_action) {
    if (diffX > delta && diffY > delta) {
      on_click();
    }
  }
});
