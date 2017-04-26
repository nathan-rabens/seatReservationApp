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
//hover over seat to change color (check availability)
// or mouseover to show text underneath- "reserve a seat"
  //   $(".seat").hover(function(){
  //      $(this).css("background-color", "#c6ff6b");
  //     }, function(){
  //       $(this).css("background-color", "#0ebaa1");
  //  });
  $(".seat").click(function(){
        $(this).text("Reserve a Seat!").css("background-color #0ebaa1");
    });
