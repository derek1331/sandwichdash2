// Button collects info from form
$(".submit").on("click", function (event) {
  // Variables that store name and room info
  var stop = $("#fullname")
    .val()
    .trim();
  var stop1 = $("#room")
    .val()
    .trim();

  // Prevent form from submitting--Need to revise
  if (stop == "") {
    event.preventDefault();
  } else if (stop1 == "") {
    event.preventDefault();
  } else {
    // Saves orderid and name to session storage
    sessionStorage.setItem("orderid", Math.random());
    sessionStorage.setItem(
      "name",
      $("#fullname")
      .val()
      .trim()
    );

    // Variable that stores form data and readies it for ajax
    var newInfo = {
      orderid: sessionStorage.getItem("orderid"),
      name: $("#fullname")
        .val()
        .trim(),
      building: $("#streetaddress")
        .val()
        .trim()
    };

    // console.log(newInfo)

    // Posting form data to api/info using form data
    $.ajax("/api/info", {
      type: "POST",
      data: newInfo
    }).then(function () {
      console.log(newInfo);
    });

    // console.log(sessionStorage.getItem('orderid'));
  }
});