$(".nav-links i").click(function () {
  $(".nav-links").animate({ width: "0px" }, 1000);
});
$(".nav-icon i, .nav-icon span").click(function () {
  let widthNavLinks = $(".nav-links").css("width");
  if (widthNavLinks == "0px") {
    $(".nav-links").animate({ width: "180px" }, 1000);
  } else {
    $(".nav-links").animate({ width: "0px" }, 1000);
  }
});
$(".nav-links a").click(function () {
  let linkHref = $(this).attr("href");
  let linkOffset = $(linkHref).offset().top;
  $("html,body").animate({ scrollTop: linkOffset }, 1500);
});

$(".duration-text h3").click(function (e) {
  $(this)
    .next()
    .slideToggle(1000, function () {
      $(this).siblings("p").slideUp(400);
    });
});

var countDownDate = new Date("Oct 25, 2023 22:30:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $("#Days").text(`${days} d`);
  $("#Hours").text(`${hours} h`);
  $("#Minutes").text(`${minutes} m`);
  $("#Seconds").text(`${seconds} s`);
  if (distance < 0) {
    clearInterval(x);
    $("#Days").text("EXPIRED");
    $("#Hours").text("Wait Upcoming Events");
    $("#Minutes").text("EXPIRED");
    $("#Seconds").text("Wait Upcoming Events");
  }
}, 1000);

$("#Textarea").keyup(function () {
  let charCount = $(this).val().length;
  if (charCount > 100) {
    $("#Chars").text(`your available character finished NO`);
  } else {
    $("#Chars").text(`${100 - charCount}`);
  }
});
