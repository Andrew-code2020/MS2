$(document).ready(function () {
    $(".19thcentury").hide();
    $(".20thcentury").hide();
    $(".21stcentury").hide();
    $(".Dimensions").hide();
    $(".climate").hide();
    $(".wildanimals").hide();
    $(".gaa").hide();
    $(".soccer").hide();
    $(".rugby").hide();
    $(".music").hide();
    $(".language").hide();
    $(".science").hide();
});
/*----History-------------------------------------------------------------------*/
$(".toggleButton19").click(function (){
    $(".history1").addClass("19thcentury");
    $(".19thcentury").toggle("slow");
});

$(".toggleButton20").click(function (){
    $(".20thcentury").toggle("slow");
}); 


$(".toggleButton21").click(function (){
    $(".21stcentury").toggle("slow");
});

/*-----Geography----------------------------------------------------------------------------------------------*/
$(".toggleButtonDimensions").click(function (){
    $(".Dimensions").toggle("slow");
});

$(".toggleButtonclimate").click(function (){
    $(".climate").toggle("slow");
});

$(".toggleButtonwildanimals").click(function (){
    $(".wildanimals").toggle("slow");
});

/*-----Sport----------------------------------------------------------------*/
$(".toggleButtongaa").click(function (){
    $(".gaa").toggle("slow");
});

$(".toggleButtonsoccer").click(function (){
    $(".soccer").toggle("slow");
});

$(".toggleButtonrugby").click(function (){
    $(".rugby").toggle("slow");
});


/*-----Culture----------------------------------------------------------------*/
$(".toggleButtonmusic").click(function (){
    $(".music").toggle("slow");
});

$(".toggleButtonlanguage").click(function (){
    $(".language").toggle("slow");
});

$(".toggleButtonscience").click(function (){
    $(".science").toggle("slow");
});


/***$(".toggleButton").click(function (){

    $(this).next("p[class$='century']").toggle("slow");
    $(this).next("p[class$='century']").toggle("slow");
    $(this).next("p[class$='century']").toggle("slow");

});***/

/*--$( ".history" ).click(function() {
  $( this ).replaceWith( $( `<p class="factone"> Irish Republican Army (IRA), launched a three-year guerrilla war, which ended in
						a truce in July 1921
					</p>` ) );
});--*/
