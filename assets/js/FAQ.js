$(document).ready(function () {
    $(".airports").hide();
    $(".transport").hide();
    $(".activityinfo").hide();
});

$(".card-body").click(function() {
  $( ".transport" ).toggle( "slow", function() {
  });
});

$(".card-body").click(function() {
  $( ".activityinfo" ).toggle( "slow", function() {
  });
});