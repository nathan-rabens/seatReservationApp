$(document).ready(function(){

	$("#submit-btn").click(function(){
		firstName = $("#first-name").val();
		lastName = $("#last-name").val();
		phoneNumber = $("#phone").val();
		email = $("#email").val();
		request = $("#request").val();
	});

	console.log(firstName);

});
//pick best look
//hover over seat to change color (check availability)
    $(".seat").hover(function(){
       $(this).css("background-color", "#c6ff6b");
      }, function(){
        $(this).css("background-color", "#0ebaa1");
   });
// mouseover to show text underneath
   //  .fadeTo(700, 0.25); should we have it fade to show unavail text
