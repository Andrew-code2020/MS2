$(document).ready(function () {
    $(".activity2").hide();
    $(".culture2").hide();
    $(".wellness2").hide();
    $(".cities2").hide();    
});
/*---top picture---*/
$(".activity" )
  .mouseenter(function() {
    $(".activity2").show();
  })
  .mouseleave(function() {
    $(".activity2").hide();
  });
/*---middle picture 1---*/
$(".culture" )
  .mouseenter(function() {
    $(".culture2").show();
  })
  .mouseleave(function() {
    $(".culture2").hide();
  });
/*---middle picture 2---*/
  $(".wellness" )
  .mouseenter(function() {
    $(".wellness2").show();
  })
  .mouseleave(function() {
    $(".wellness2").hide();
  });
/*---bottom picture 1---*/
  $(".cities")
  .mouseenter(function() {
    $(".cities2").show();
  })
  .mouseleave(function() {
    $(".cities2").hide();
  });

/*----google maps API Code---- */
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: {
      lat: 53.4826154,
      lng: -6.7198014,
    },
  });
  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
    /*---Activity--*/
    { lat: 53.6227712, lng: -9.7567215}, /*-- A Delphi Resort-*/
    { lat: 53.5555257, lng: -7.7096148 }, /*-B CenterParcs--*/
    { lat: 54.4746041, lng: -8.2834977}, /*- C Donegal Adventure Center--*/
    { lat: 52.176965, lng:-7.5084257}, /*--D Waterford Greenway--*/
    /*----Culture-----*/
    { lat: 53.6947151, lng: -6.4776804 }, /*-- E Newgrange---*/
    { lat: 53.3607152, lng: -6.2533976 }, /*--- F Croke Park---*/
    { lat: 51.622935, lng: -8.8911715},/*-- G De Barra Folk Club---*/
    { lat: 51.9132734, lng: -8.1713917}, /*-- H Jameson Distillery---*/
    /*------Wellness------*/
    {lat:53.1842, lng: -6.1855}, /*---I Powerscourt-----*/
    {lat:51.597162, lng: -8.8639444}, /*------ J Inchodoney--*/
    {lat:52.0674492, lng:-9.5749603 }, /*------ K The Europe-------*/
    {lat:52.7533312, lng:-6.5165827}, /*-- L Wicklow Yoga Retreat---*/

    /*----Cities-----*/
    {lat: 53.3244431, lng: -6.3857885}, /*-- M Dublin--*/
    {lat: 51.8997901, lng: -8.536997}, /*---N Cork--*/
    {lat: 52.6515985, lng:-8.70018},    /*--- O Limerick--*/
    {lat:52.6540919, lng:-7.2743344},   /*--- P Kilkenny--*/
    {lat: 53.2839936, lng:-9.1187865}    /*!---Q Galway--*/
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });
  var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
