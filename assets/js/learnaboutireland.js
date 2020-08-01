$(document).ready(function () {
    $(".19thcentury").hide();
    $(".20thcentury").hide();
    $(".21stcentury").hide();
});

$(".toggleButton19").click(function (){
    $(".19thcentury").next().toggle("slow");
});

$(".toggleButton20").click(function (){
    $(".20thcentury").toggle("slow");
}); 


$(".toggleButton21").click(function (){
    $(".21stcentury").toggle("slow");
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
