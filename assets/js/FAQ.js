$(document).ready(function () {
    $(".airports").hide();
});

$(".fas fa-plus-circle").click(function() {
  $( ".airports" ).fadeIn( "slow", function() {
  });
});