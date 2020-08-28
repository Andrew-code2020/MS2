$(document).ready(function () {
    $(".activity2").hide();
    $(".culture2").hide();
    $(".wellness2").hide();
    $(".cities2").hide();    
});

$(".activity" )
  .mouseenter(function() {
    $(".activity2").show();
  })
  .mouseleave(function() {
    $(".activity2").hide();
  });

$(".culture" )
  .mouseenter(function() {
    $(".culture2").show();
  })
  .mouseleave(function() {
    $(".culture2").hide();
  });

  $(".wellness" )
  .mouseenter(function() {
    $(".wellness2").show();
  })
  .mouseleave(function() {
    $(".wellness2").hide();
  });

  $(".cities")
  .mouseenter(function() {
    $(".cities2").show();
  })
  .mouseleave(function() {
    $(".cities2").hide();
  });



