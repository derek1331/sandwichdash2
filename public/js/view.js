var clock;

// Displays flipclock
$(document).ready(function () {
  var deadlineHour = 11,
    offset = 0;

  // Grab the current date
  var currentDate = new Date();

  if (currentDate.getHours() >= deadlineHour) {
    offset = 1;
  }

  var futureDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + offset,
    deadlineHour
  );

  // Calculate the difference in seconds between the future and current date
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  console.log(diff);


  // Instantiate a coutdown FlipClock
  clock = $(".clock").FlipClock(diff, {
    clockFace: "HourlyCounter",

    countdown: true,
    // onStop: function() {
    //   console.log("hello");
    //   $("#exampleModal").modal("show");
    //   clock.setFaceValue(24 * 60 * 60);
    //   clock.start();
    // }
  });

  // clock.face.on("stop", function () {
  //   // add 24 hours worth of seconds to the clock face
  //   clock.setFaceValue(24 * 60 * 60);
  //   clock.start();
  // });
});


$("#exampleModal").on("show.bs.modal", function (event) {
  var modal = $(this);
  modal.find(".modal-title").text("Sorry");
  modal
    .find(".modal-body")
    .text(
      "You missed it. But don't worry you have plenty of time to order one for tomorrow"
    );
});

// On close Modal redirects user to home/root
$("#exampleModal").on("hidden.bs.modal", function (event) {
  window.location.href = "/";
});