// On open Modal displayes name from seesion storage
$("#exampleModal").on("show.bs.modal", function (event) {
  var modal = $(this);
  modal.find(".modal-title").text("Congrats " + sessionStorage.getItem("name"));
  modal
    .find(".modal-body")
    .text(
      "Your order has been recieved and you will recieve a conformation text shortly"
    );
});

// On close Modal redirects user to home/root
$("#exampleModal").on("hidden.bs.modal", function (event) {
  window.location.href = "/";
});

// Button to collect payment info--if we collected payment info
// $(".submit").on("click", function (event) {
//   // event.preventDefault();

//   console.log($(".payment:checked").map(function () { return this.value; }).get().join(","));
//   });