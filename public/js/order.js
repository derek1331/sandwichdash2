// Variable storing total
var total = 0;

// When clicking on submit button
$(".submit").on("click", function (event) {
  // Prevents submit if total = 0
  if (total == 0) {
    event.preventDefault();
  } else {
    // Readies total data for AJAX
    var customerTotal = {
      orderid: sessionStorage.getItem("orderid"),
      total: total
    };

    // Post total data using AJAX
    $.ajax("/api/total", {
      type: "POST",
      data: customerTotal
    }).then(function () {
      console.log(customerTotal);
    });
  }
});

//When clicking on add-to-order sandwich button
$(".addSandwich").on("click", function (event) {
  event.preventDefault();

  // Readies sandwich data for AJAX
  var newSandwich = {
    orderid: sessionStorage.getItem("orderid"),
    sandwichid: Math.random(),
    type: $(".type:checked")
      .map(function () {
        return this.value;
      })
      .get()
      .join(","),
    bread: $(".bread:checked")
      .map(function () {
        return this.value;
      })
      .get()
      .join(","),
    cheese: $(".cheese:checked")
      .map(function () {
        return this.value;
      })
      .get()
      .join(","),
    veggies: $(".veggies:checked")
      .map(function () {
        return this.value;
      })
      .get()
      .join(","),
    condiments: $(".condiments:checked")
      .map(function () {
        return this.value;
      })
      .get()
      .join(",")
  };

  // Post sandwich data using AJAX
  $.ajax("/api/sandwiches", {
    type: "POST",
    data: newSandwich
  }).then(function () {
    // Appends sandwich data to document
    if (newSandwich) {
      $("#order-to-table").append(
        $(
          "<tr class='replace-sandwich' data-show-sandwich=" + newSandwich.sandwichid + "><td class='order-font'><button data-sandwich=" + newSandwich.sandwichid + " type='button' class='close close-sandwich' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
          newSandwich.type +
          "</td><td class='order-font'>" +
          "$5.00" +
          "</td></tr>"
        )
      );
      total = total + 5;
      $("#total").text("Total: $" + total + ".00");
      console.log(total);
    }
  });
});

// When clicking on add-to-order side button
$(".addSides").on("click", function (event) {
  event.preventDefault();

  // Readies side data for AJAX
  var newSides = {
    orderid: sessionStorage.getItem("orderid"),
    sideid: Math.random(),
    sides: $(".sides:checked")
      .map(function () {
        return this.value;
      })
      .get()
      .join(",")
  };

  // Posts side data using AJAX
  $.ajax("/api/sides", {
    type: "POST",
    data: newSides
  }).then(function () {
    // Appends side data to document
    if (newSides) {
      $("#order-to-table").append(
        $(
          "<tr class='replace-side' data-show-side=" + newSides.sideid + "><td class='order-font'><button data-side=" + newSides.sideid + " type='button' class='close close-side' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
          newSides.sides +
          '</td><td class="order-font">' +
          "$1.00" +
          "</td></tr>"
        )
      );
      total = total + 1;
      $("#total").text("Total: $" + total + ".00");
      console.log(total);
    }
  });
});

// When clicking on add-to-order drink button
$(".addDrinks").on("click", function (event) {
  event.preventDefault();

  // Readies drink data for AJAX
  var newDrinks = {
    orderid: sessionStorage.getItem("orderid"),
    drinkid: Math.random(),
    drinks: $(".drinks:checked")
      .map(function () {
        return this.value;
      })
      .get()
      .join(",")
  };

  // Posts side data using AJAX
  $.ajax("/api/drinks", {
    type: "POST",
    data: newDrinks
  }).then(function () {
    // Appends drink data to document
    if (newDrinks) {
      $("#order-to-table").append(
        $(
          "<tr class='replace-drink' data-show-drink=" + newDrinks.drinkid + "><td class='order-font'><button data-drink=" + newDrinks.drinkid + " type='button' class='close close-drink' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
          newDrinks.drinks +
          '</td><td class="order-font">' +
          "$1.00" +
          "</td></tr>"
        )
      );
      total = total + 1;
      $("#total").text("Total: $" + total + ".00");
      console.log(total);
    }
  });
});


// Prevent Collaspe on itself

$('[data-toggle=collapse]').on('click', function (e) {
  // e.preventDefault();
  if ($(this).attr('aria-expanded') == 'true') {
    e.stopPropagation();
    return false;
  }
});

// Delete Sandwich
$(document).on('click', '.close-sandwich', function () {
  var id = $(this).attr("data-sandwich");
  $.ajax({
    method: "DELETE",
    url: "/api/sandwiches/" + id
  }).then(function(){
    $('.replace-sandwich[data-show-sandwich="' + id + '"]').remove();
    total = total - 5;
    $("#total").text("Total: $" + total + ".00");
  })
});

// Delete Side
$(document).on('click', '.close-side', function () {
  var id = $(this).attr("data-side");
  $.ajax({
    method: "DELETE",
    url: "/api/sides/" + id
  }).then(function(){
    $('.replace-side[data-show-side="' + id + '"]').remove();
    total = total - 1;
    $("#total").text("Total: $" + total + ".00");
  })
});

// Delete Sandwich
$(document).on('click', '.close-drink', function () {
  var id = $(this).attr("data-drink");
  $.ajax({
    method: "DELETE",
    url: "/api/drinks/" + id
  }).then(function(){
    $('.replace-drink[data-show-drink="' + id + '"]').remove();
    total = total - 1;
    $("#total").text("Total: $" + total + ".00");
  })
});