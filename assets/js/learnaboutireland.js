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
});
/*----History-----*/
$(".toggleButton19").click(function (){
    $(".19thcentury").next().toggle("slow");
});

$(".toggleButton20").click(function (){
    $(".20thcentury").toggle("slow");
}); 


$(".toggleButton21").click(function (){
    $(".21stcentury").toggle("slow");
});

/*-----Geography------------------------------*/
$(".toggleButtonDimensions").click(function (){
    $(".Dimensions").toggle("slow");
});

$(".toggleButtonclimate").click(function (){
    $(".climate").toggle("slow");
});

$(".toggleButtonewildanimals").click(function (){
    $(".wildanimals").toggle("slow");
});

/*-----Sport------------------------*/



/*-----Music----------------------------*/



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
