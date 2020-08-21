$(document).ready(function () {
    $(".airports").hide();
    $(".transport").hide();
    $(".currency").hide();
    $(".activityhol").hide();
    $(".culturehol").hide();
    $(".wellnesshol").hide();
    $(".cityhol").hide();
});

$(".airports1").click(function() {
  $( ".airports" ).toggle( "slow", function() {
  });
});

$(".transport1").click(function() {
  $( ".transport" ).toggle( "slow", function() {
  });
});

$(".currency1").click(function() {
  $( ".currency" ).toggle( "slow", function() {
  });
});

$(".activityhol1").click(function() {
  $( ".activityhol" ).toggle( "slow", function() {
  });
});

$(".culturehol1").click(function() {
  $( ".culturehol").toggle( "slow", function() {
  });
});

$(".wellnesshol1").click(function() {
  $(".wellnesshol").toggle( "slow", function() {
  });
});

$(".cityhol1").click(function() {
  $( ".cityhol").toggle( "slow", function() {
  });
});
