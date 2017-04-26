$(document).ready(function(){

	$("#submit-btn").click(function(){
		firstName = $("#first-name").val();
		lastName = $("#last-name").val();
		phoneNumber = $("#phone").val();
		email = $("#email").val();
		request = $("#request").val();
	});

	console.log(firstName);
	
	//create empty array for seats with loop (1 to 24)
	
	//push seats with empty object properties into the array ((name.val, seat number.text, phone.val, email.val, request.val))
	
	//if clicked add class selected to seat
	
	//if seat is clicked form drops down
	
	//if form submited, seats with class selected toggleClass to researved, add innerText = seat.name
	
	//add button that drops down seating-area div if clicked
	
	
	

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
