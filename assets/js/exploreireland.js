$(document).ready(function () {
    $(".activity2").hide();
    
});

$(".activity" )
  .mouseenter(function() {
    $(".activity2").show();
  })
  .mouseleave(function() {
    $(".activity2").hide();
  });




/*function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: 46.619261,
      lng: -33.134766,
    },
  });
  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
    { lat: 51.9333, lng: 8.5656 },
    { lat: 51.6339, lng: 8.7059 },
    { lat: 51.6492, lng: 8.6027 },
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}*/
